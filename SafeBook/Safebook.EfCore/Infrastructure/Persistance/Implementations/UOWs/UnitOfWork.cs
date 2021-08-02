using Safebook.EfCore.EFData;
using SafeBook.Domain.Persistence;
using SafeBook.EfCore.Infrastructure.Persistance.Implementations.Common;
using SafeBook.EfCore.Infrastructure.Persistance.Implementations.MainPage;
using SafeBook.EfCore.Infrastructure.Persistance.Implementations.Shop;
using SafeBook.EfCore.Infrastructure.Persistance.Repositories.Common;
using SafeBook.EfCore.Infrastructure.Persistance.Repositories.Shop;
using System;

namespace SafeBook.EfCore.Infrastructure.Persistance.Implementations.UOWs
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly SafeBookDbContext _safeBookDbContext;

        public INewsRepository News { get; }
        public IUsersRepository Users { get; }
        public IProjectsRepository Projects { get; }
        public IRolesRepository Roles { get; }
        public IProductsRepository Products { get; }
        public IProductCategoryRepository ProductCategories { get; }

        public UnitOfWork(SafeBookDbContext dbContext)
        {
            this._safeBookDbContext = dbContext;

            News = new NewsRepositoryEfCore(dbContext);
            Users = new UsersRepositoryEfCore(dbContext);
            Projects = new ProjectsRepositoryEfCore(dbContext);
            Roles = new RolesRepositoryEfCore(dbContext);
            Products = new ProductsRepositoryEfCore(dbContext);
            ProductCategories = new ProductCategoryRepositoryEfCore(dbContext);
        }

        public int Save()
        {
            return _safeBookDbContext.SaveChanges();
        }
        public void Dispose()
        {
            _safeBookDbContext.Dispose();
            GC.SuppressFinalize(true);
        }
    }
}
