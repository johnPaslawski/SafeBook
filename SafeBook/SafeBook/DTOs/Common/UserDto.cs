using SafeBook.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SafeBook.DTOs.Common
{
    public class CreateUserDto
    {
        public string FirstName { get; set; }
        public string SecondtName { get; set; }
        public string LastName { get; set; }
        public DateTime BirthDate { get; set; }
        public string AdressLine1 { get; set; }
        public string AdressLine2 { get; set; }
        public string City { get; set; }
        public string PostalCode { get; set; }
        public string Country { get; set; }
        public string PhoneNumber { get; set; }
        public string PhoneNumber2 { get; set; }
        public int RoleId { get; set; }
    }

    
    public class UpdateUserDto : CreateUserDto
    {
        //public RoleDto Role { get; set; }
    }

    public class UserDto : CreateUserDto
    {
        public int Id { get; set; }
        public RoleDto Role { get; set; }
    }
}
