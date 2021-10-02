using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SafeBook.IdentityServer.Controllers
{
    public class PasswordResetViewModel
    {
        [Required]
        [DataType(DataType.Text)]
        public Guid UserId { get; set; }

        [Required]
        [DataType(DataType.Text)]
        public string ResetToken { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "New password")]
        public string Password { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Confirm the new password")]
        [Compare("Password")]
        public string ConfirmPassword { get; set; }
    }
}
