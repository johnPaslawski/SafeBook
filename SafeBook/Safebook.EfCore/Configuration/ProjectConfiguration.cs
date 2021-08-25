using Microsoft.EntityFrameworkCore;
using SafeBook.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace SafeBook.EfCore.Configuration
{
    public class ProjectConfiguration : IEntityTypeConfiguration<Project>
    {
        public void Configure(EntityTypeBuilder<Project> builder)
        {
            builder.HasData(
                new Project { Id = 1, Title = "Taki fajny projekt", Description = "kolejny ładny projekt", CreationDate = DateTime.Now },
                new Project { Id = 2, Title = "A ten jaki ładny", Description = "dobrze kolega mówi, zacny", CreationDate = DateTime.Now },
                new Project { Id = 3, Title = "No, ten to nie siadł", Description = "program ewidentnie im nie leżał", CreationDate = DateTime.Now }
            );
        }
    }
}
