using System.ComponentModel.DataAnnotations;

namespace SafeBook.IdentityServer.Controllers
{
    public class LoginViewModel
    {
        [Required]
        [DataType(DataType.Text)]
        public string Username { get; set; }
        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        [Required] // TODO check this behaviour
        [DataType(DataType.Url)]
        public string ReturnUrl { get; set; }
        public string ErrorMessage { get; set; }
    }
}
