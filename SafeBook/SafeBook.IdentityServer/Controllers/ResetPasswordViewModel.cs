using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SafeBook.IdentityServer.Controllers
{
    public class ResetPasswordViewModel
    {
        [Required]
        [DataType(DataType.Text)]
        public Guid UserId { get; set; }

        [Required]
        [DataType(DataType.Text)]
        public string ResetToken { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Nowe hasło")]
        public string Password { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Potwierdź nowe hasło")]
        [Compare("Password", ErrorMessage = "Podaj to samo nowe hasło w obydwu polach.")]
        public string ConfirmPassword { get; set; }
    }
}
