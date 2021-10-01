using SafeBook.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace SafeBook.DTOs.Common
{
    public class CreateUserDto
    {
        public string UserName => FirstName + LastName;
        public string FirstName { get; set; }
        public string SecondName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public DateTime BirthDate { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string City { get; set; }
        public string PostalCode { get; set; }
        public string Country { get; set; }
        public string PhoneNumber { get; set; }
        public string PhoneNumber2 { get; set; }
        public string RoleId { get; set; }
    }

    
    public class UpdateUserDto : CreateUserDto
    {
        //public RoleDto Role { get; set; }
    }

    public class UserDto : CreateUserDto
    {
        public Guid Id { get; set; }
        public IdentityRole Role { get; set; }
    }
}
