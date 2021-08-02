using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SafeBook.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SafeBook.EfCore.Configuration
{
    public class NewsConfiguration : IEntityTypeConfiguration<News>
    {
        public void Configure(EntityTypeBuilder<News> builder)
        {
            builder.HasData(
                new News { Id = 1, CreationDate = DateTime.Now, Description = "fsdfsdDecription of this cool news", Title = "News nr 1" },
                new News { Id = 2, CreationDate = DateTime.Now, Description = "asdasdasdasd of this cool news", Title = "News nr 2" },
                new News { Id = 3, CreationDate = DateTime.Now, Description = "rtyrtyrty of this cool news", Title = "News nr 3" }
            );
        }
    }
}