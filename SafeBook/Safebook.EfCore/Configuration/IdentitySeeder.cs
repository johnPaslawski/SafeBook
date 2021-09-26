using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using SafeBook.Domain.Common;

namespace SafeBook.EfCore.Configuration
{
    public static class IdentitySeeder
    {
        public static void SeedData(UserManager<AppUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            SeedRoles(roleManager);
            SeedUsers(userManager);
        }

        public static void SeedUsers(UserManager<AppUser> userManager)
        {
            var users = new[]
            {
                new AppUser("Admin") // userNames passed here must be equal to appropriate role names
                {
                    AddressLine1 = "Krótka 4/56", BirthDate = DateTime.Now, City = "Kraków", FirstName = "Adam",
                    LastName = "Stary", PostalCode = "30-004"
                },
                new AppUser("BoardMember")
                {
                    AddressLine1 = "Długa 98/3", BirthDate = DateTime.Now, City = "Poznań", FirstName = "Magda",
                    LastName = "Młoda", PostalCode = "23-323"
                },
                new AppUser("Member")
                {
                    AddressLine1 = "Lipna 10/5c", BirthDate = DateTime.Now, City = "Kraków", FirstName = "Lech",
                    LastName = "Nijaki", PostalCode = "50-111"
                }
            };

            foreach (var user in users)
            {
                if (userManager.FindByNameAsync(user.UserName).Result == null)
                {
                    var result = userManager.CreateAsync(user, "pass").Result;
                    if (result.Succeeded) userManager.AddToRoleAsync(user, user.UserName).Wait();
                }
            }
        }

        public static void SeedRoles(RoleManager<IdentityRole> roleManager)
        {
            var roleNames = new[] { "RegularUser", "Member", "BoardMember", "Admin" };

            foreach (var roleName in roleNames)
            {
                if (!roleManager.RoleExistsAsync(roleName).Result)
                {
                    var role = new IdentityRole(roleName) { NormalizedName = roleName.ToUpper()};
                    var result = roleManager.CreateAsync(role).Result;
                    if (!result.Succeeded)
                        foreach (var error in result.Errors)
                        {
                            throw new Exception(error.Description);
                        }
                }
            }
        }
    }
}
