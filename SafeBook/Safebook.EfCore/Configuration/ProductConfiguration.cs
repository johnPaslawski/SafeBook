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
    public class ProductConfiguration : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> builder)
        {
            builder.HasData(
                new Product { Id = 1, Name = "Ołówek 1", Description = "", ProductCategoryId = 2, DefaultPrice = (decimal)2.99},
                new Product { Id = 2, Name = "Ołówek 2", Description = "", ProductCategoryId = 2, DefaultPrice = (decimal)3.99},
                new Product { Id = 3, Name = "Ołówek 3", Description = "", ProductCategoryId = 2, DefaultPrice = (decimal)10.00},
                new Product { Id = 4, Name = "Kubek 1", Description = "", ProductCategoryId = 1, DefaultPrice = (decimal)25.99},
                new Product { Id = 5, Name = "Kubek 2", Description = "", ProductCategoryId = 1, DefaultPrice = (decimal)10.99},
                new Product { Id = 6, Name = "Kubek 3", Description = "", ProductCategoryId = 1, DefaultPrice = (decimal)14.00},
                new Product { Id = 7, Name = "Tłumik skrzypcowy", Description = "", ProductCategoryId = 3, DefaultPrice = (decimal)39.00},
                new Product { Id = 8, Name = "Tłumik wiolonczelowy", Description = "", ProductCategoryId = 3, DefaultPrice = (decimal)59.00},
                new Product { Id = 9, Name = "Tłumik do trąbki C", Description = "", ProductCategoryId = 3, DefaultPrice = (decimal)114.99},
                new Product { Id = 10, Name = "Pulpit srebrny", Description = "", ProductCategoryId = 4, DefaultPrice = (decimal)108.90},
                new Product { Id = 11, Name = "Pulpit koncertowy - czarny", Description = "", ProductCategoryId = 4, DefaultPrice = (decimal)190.99},
                new Product { Id = 12, Name = "Pulpit Dyrygencki", Description = "", ProductCategoryId = 4, DefaultPrice = (decimal)349.90}
                );
        }
    }
}
