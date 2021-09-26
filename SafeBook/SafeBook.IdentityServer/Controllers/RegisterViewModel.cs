using System.ComponentModel.DataAnnotations;

namespace SafeBook.IdentityServer.Controllers
{
    public class RegisterViewModel
    {
        [Required]
        [DataType(DataType.Text)]
        public string Username { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Compare("Password")]
        public string ConfirmPassword { get; set; }

        [Required]
        [DataType(DataType.Url)]
        public string ReturnUrl { get; set; }
    }
}
