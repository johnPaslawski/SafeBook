using SafeBook.Domain.Shop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SafeBook.DTOs.Shop
{
    public class CreateProductDto
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal DefaultPrice { get; set; }
        public int ProductCategoryId { get; set; }

    }

    public class ProductDto : CreateProductDto
    {

        public int Id { get; set; }
        public ProductCategory ProductCategory { get; set; }
    }

    public class UpdateProductDto : CreateProductDto
    {
        public ProductCategory ProductCategory { get; set; }
    }
}
