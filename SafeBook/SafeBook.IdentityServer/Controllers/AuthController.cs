using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using IdentityModel;
using IdentityServer4.Extensions;
using IdentityServer4.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using NETCore.MailKit.Core;
using SafeBook.Domain.Common;

namespace SafeBook.IdentityServer.Controllers
{
    public class AuthController : Controller
    {
        private readonly SignInManager<AppUser> _signInManager;
        private readonly UserManager<AppUser> _userManager;
        private readonly IIdentityServerInteractionService _interactionService;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IEmailService _emailService;

        public AuthController(SignInManager<AppUser> signInManager,
            UserManager<AppUser> userManager,
            IIdentityServerInteractionService interactionService,
            RoleManager<IdentityRole> roleManager,
            IEmailService emailService)
        {
            _signInManager = signInManager;
            _userManager = userManager;
            _interactionService = interactionService;
            _roleManager = roleManager;
            _emailService = emailService;
        }

        [HttpGet]
        public async Task<IActionResult> Login(string returnUrl)
        {
            return View(new LoginViewModel() { ReturnUrl = returnUrl });
        }

        [HttpPost]
        public async Task<IActionResult> Login(LoginViewModel viewModel)
        {
            // TODO Validate model !!!
            // ...
            var user = await _userManager.FindByNameAsync(viewModel.Username);

            if (user == null)
            {
                viewModel.ErrorMessage = "Użytkownik nie istnieje. Sprawdź poprawność danych.";
                return View(viewModel);
            }

            if (user.EmailConfirmed) // TODO add as requirement in identity config
            {
                var result = await _signInManager.PasswordSignInAsync(viewModel.Username, viewModel.Password, false, false);

                if (result.Succeeded)
                {
                    var userRole = _userManager.GetRolesAsync(user).Result.First();
                    _userManager.AddClaimAsync(user, new Claim(JwtClaimTypes.Role, userRole)).Wait();

                    return Redirect(viewModel.ReturnUrl);
                }

                if (result.IsLockedOut)
                {
                    // TODO send recovery email or similar
                }

                viewModel.ErrorMessage = "Nieprawidłowe hasło!";
                return View(viewModel);
            }

            return BadRequest("You need to verify your email first!");
        }

        [HttpGet]
        public async Task<IActionResult> Register(string returnUrl)
        {
            return View(new RegisterViewModel(){ ReturnUrl = returnUrl});
        }

        [HttpPost]
        public async Task<IActionResult> Register(RegisterViewModel viewModel)
        {
            // TODO Validate model !!!
            // ...

            if (!ModelState.IsValid)
            {
                return View(viewModel);
            }

            var user = new AppUser(viewModel.Email){Email = viewModel.Email};
            var result = await _userManager.CreateAsync(user, viewModel.Password);

            if (result.Succeeded)
            {
                _userManager.AddToRoleAsync(user, "RegularUser").Wait();
                var confirmationToken = await _userManager.GenerateEmailConfirmationTokenAsync(user);
                var confirmationLink = Url.Action(nameof(VerifyEmail),
                    "Auth",
                    new { userId = user.Id, confirmationToken, viewModel.ReturnUrl },
                    Request.Scheme,
                    Request.Host.ToString());

                await _emailService.SendAsync(user.Email, "SafeBook - aktywacja konta",
                    $"<h3>Witaj, {user.FirstName ?? "Nieznajomy / -a!"}</h3>" +
                    $"<p>Cieszymy się, że jesteś z nami :)</p>" +
                    $"<a href={confirmationLink}>Kliknij tutaj aby aktywować swoje SafeBookowe konto</a>",
                    true);

                return RedirectToAction("EmailVerification");
            }

            if (result.ToString().Contains("DuplicateUserName")) // TODO check what errors may occur here and handle in bulk if possible
            {
                viewModel.ErrorMessage = "Użytkownik o podanym adresie e-mail już istnieje.";
                return View(viewModel);
            }

            return BadRequest();
        }

        [HttpGet]
        public async Task<IActionResult> VerifyEmail(Guid userId, string confirmationToken, string returnUrl)
        {
            var user = await _userManager.FindByIdAsync(userId.ToString());

            if (user == null) return BadRequest();

            var result = await _userManager.ConfirmEmailAsync(user, confirmationToken);

            if (result.Succeeded) return View(new LoginViewModel{ReturnUrl = returnUrl});

            return BadRequest();
        }

        [HttpGet]
        public IActionResult EmailVerification() => View();

        [HttpGet]
        public async Task<IActionResult> Logout(string logoutId)
        {
            if (!User.IsAuthenticated()) return NotFound(); // TODO do we need this?

            var user = await _userManager.FindByNameAsync(User.Identity.Name);

            await _userManager.RemoveClaimsAsync(user, User.Claims);
            await _signInManager.SignOutAsync();


            var logoutRequest = await _interactionService.GetLogoutContextAsync(logoutId);

            if (string.IsNullOrEmpty(logoutRequest.PostLogoutRedirectUri))
            {
                return BadRequest("No post logout redirect URI specified"); // TODO is this necessary?
            }

            return Redirect(logoutRequest.PostLogoutRedirectUri);
        }

        [HttpGet]
        public async Task<IActionResult> PasswordReset(string email)
        {
            var user = await _userManager.FindByEmailAsync(email);

            if (user == null) return BadRequest("Użytkownik nie istnieje!");

            var resetToken = await _userManager.GeneratePasswordResetTokenAsync(user);
            var resetLink = Url.Action(nameof(ResetPassword),
                "Auth",
                new { userId = user.Id, resetToken },
                Request.Scheme,
                Request.Host.ToString());

            await _emailService.SendAsync(user.Email, "Odzyskiwanie hasła - SafeBook",
                $"<h3>Witaj, {user.FirstName ?? "Nieznajomy / -a!"}</h3>" +
                    $"<p>Ktoś usiłuje zresetować Twoje hasło do SafeBooka. Jeśli to nie ty, zignoruj tę wiadomość lub powiadom administrację," +
                $" jeśli ten problem wystąpi ponownie.</p>" +
                    $"<a href={resetLink}>Kliknij tutaj, aby odzyskać hasło</a>",
                true);

            return View();
        }

        [HttpGet]
        public async Task<IActionResult> ResetPassword(Guid userId, string resetToken) =>
            View(new ResetPasswordViewModel { UserId = userId, ResetToken = resetToken });

        [HttpPost]
        public async Task<IActionResult> ResetPassword(ResetPasswordViewModel viewModel)
        {
            if (!ModelState.IsValid) return View(viewModel);
            var user = await _userManager.FindByIdAsync(viewModel.UserId.ToString());

            if (user == null) return BadRequest();

            var result = await _userManager.ResetPasswordAsync(user, viewModel.ResetToken, viewModel.Password);

            if (!result.Succeeded) throw new Exception($"Cannot reset password for user with id: {user.Id}");

            return Redirect("https://localhost:44366/"); // TODO remove hardcoded reference
        }
    }
}
