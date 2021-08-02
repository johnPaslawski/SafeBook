using Safebook.Domain.Persistence;
using SafeBook.Domain.Shop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SafeBook.EfCore.Infrastructure.Persistance.Repositories.Shop
{
    public interface IProductsRepository : IRepository<Product>
    {
    }
}
