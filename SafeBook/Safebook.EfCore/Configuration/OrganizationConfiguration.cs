using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SafeBook.Domain.HRMS;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SafeBook.EfCore.Configuration
{
    public class OrganizationConfiguration : IEntityTypeConfiguration<Organization>
    {
        public void Configure(EntityTypeBuilder<Organization> builder)
        {
            builder.HasData(

                new Organization
                {
                    Id = 1,
                    Name = "Stowarzyszenie Partytura",
                    Adress = "Citkowice 32, 32-700 Bochnia",
                    REGON = "388006387",
                    NIP = "8681980008",
                    KRS = "0000878769",
                    BankAccountNumber = "46 1020 4984 0000 4002 0148 2553"
                }
            );
        }
    }
}
