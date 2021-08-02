using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SafeBook.Domain.Shop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SafeBook.EfCore.Configuration
{
    public class ProductCategoryConfiguration : IEntityTypeConfiguration<ProductCategory>
    {
        public void Configure(EntityTypeBuilder<ProductCategory> builder)
        {
            builder.HasData(
                new ProductCategory { Id = 1, Name = "Kubki", Description = "Kubki z nadrukiem, muzyczne i inne"},
                new ProductCategory { Id = 2, Name = "Artykuły biurowe", Description = "Ołówki, długopisy muzyczne i inne"},
                new ProductCategory { Id = 3, Name = "Akcesoria do instrumentów", Description = "Akcesoria do instrumentów smyczkowych i dętych"},
                new ProductCategory { Id = 4, Name = "Akcesoria muzyczne", Description = "Inne akcesoria, pulpity, lampki i pozostałe"}
                );
        }
    }
}
