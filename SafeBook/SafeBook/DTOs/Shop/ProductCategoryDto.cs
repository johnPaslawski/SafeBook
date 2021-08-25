using SafeBook.Domain.Shop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SafeBook.DTOs.Shop
{
    public class CreateProductCategoryDto
    {

        public string Name { get; set; }
        public string Description { get; set; }

    }

    public class ProductCategoryDto : CreateProductCategoryDto
    {
        public int Id { get; set; }
        public virtual IList<Product> Products { get; set; }
    }

    
    public class UpdateProductCategoryDto : CreateProductCategoryDto
    {
        public virtual IList<Product> Products { get; set; }
    }
}
