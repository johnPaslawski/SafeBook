using Microsoft.EntityFrameworkCore;
using Safebook.EfCore.EFData;
using SafeBook.Domain.Shop;
using SafeBook.EfCore.Infrastructure.Persistance.Repositories.Shop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SafeBook.EfCore.Infrastructure.Persistance.Implementations.Shop
{
    public class ProductCategoryRepositoryEfCore : RepositoryEfCore<ProductCategory>, IProductCategoryRepository
    {
        public ProductCategoryRepositoryEfCore(SafeBookDbContext dbContext) : base(dbContext)
        {
        }

        public ProductCategory GetProductCategory(int id)
        {
            return GetDbContext().ProductCategories
                .Where(x => x.Id == id)
                .Include(x => x.Products)
                .FirstOrDefault();
        }

        private SafeBookDbContext GetDbContext() => (SafeBookDbContext)_dbContext;
    }
}
