using System.Collections.Generic;

namespace SafeBook.Domain.Shop
{
    public class ProductCategory
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public virtual IList<Product> Products { get; set; }
        
    }
}