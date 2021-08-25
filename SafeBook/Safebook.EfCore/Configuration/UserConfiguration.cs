using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SafeBook.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SafeBook.EfCore.Configuration
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.HasData(
                new User { Id = 1, AdressLine1 = "Krótka 4/56", BirthDate = DateTime.Now, City = "Kraków", FirstName = "Adam", LastName = "Stary", PostalCode = "30-004", RoleId = 1},
                new User { Id = 2, AdressLine1 = "Długa 98/3", BirthDate = DateTime.Now, City = "Poznań", FirstName = "Magda", LastName = "Młoda", PostalCode = "23-323", RoleId = 2},
                new User { Id = 3, AdressLine1 = "Lipna 10/5c", BirthDate = DateTime.Now, City = "Kraków", FirstName = "Lech", LastName = "Nijaki", PostalCode = "50-111", RoleId = 3}
            );
        }
    }
}