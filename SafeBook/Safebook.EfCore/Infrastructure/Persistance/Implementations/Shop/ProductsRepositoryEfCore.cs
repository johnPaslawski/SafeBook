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
    public class ProductsRepositoryEfCore : RepositoryEfCore<Product>, IProductsRepository
    {
        public ProductsRepositoryEfCore(SafeBookDbContext dbContext) : base(dbContext)
        {
        }

        private SafeBookDbContext GetDbContext() => (SafeBookDbContext)_dbContext;
    }
}
