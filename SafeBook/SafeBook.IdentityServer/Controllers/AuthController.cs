using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using IdentityModel;
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
                viewModel.ErrorMessage = "No such user!";
                return View(viewModel);
            }

            if (user.EmailConfirmed)
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

                return View();
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

                await _emailService.SendAsync(user.Email, "SafeBook email verification",
                    $"<a href={confirmationLink}>Click here to verify your account</a>", true);

                return RedirectToAction("EmailVerification");


                await _signInManager.SignInAsync(user, false);
                return Redirect(viewModel.ReturnUrl);
            }

            return BadRequest(result.Errors.FirstOrDefault().Description);
        }

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
            var user = _userManager.FindByNameAsync(User.Identity.Name).Result;
            _userManager.RemoveClaimsAsync(user, User.Claims).Wait();
            await _signInManager.SignOutAsync();


            var logoutRequest = await _interactionService.GetLogoutContextAsync(logoutId);

            if (string.IsNullOrEmpty(logoutRequest.PostLogoutRedirectUri))
            {
                return BadRequest("No post logout redirect URI specified"); // TODO is this necessary?
            }

            return Redirect(logoutRequest.PostLogoutRedirectUri);
        }
    }
}
