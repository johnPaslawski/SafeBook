using System.ComponentModel.DataAnnotations;

namespace SafeBook.IdentityServer.Controllers
{
    public class RegisterViewModel
    {
        [Required]
        [DataType(DataType.EmailAddress)]
        [Display(Name = "Adres e-mail")]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Hasło")]
        public string Password { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessage = "Podaj to samo hasło w polach \"Hasło\" i \"Potwierdź Hasło\"")]
        [Display(Name = "Potwierdź hasło")]
        public string ConfirmPassword { get; set; }

        [Required]
        [DataType(DataType.Url)]
        public string ReturnUrl { get; set; }

        [DataType(DataType.Text)]
        public string ErrorMessage { get; set; }
    }
}
