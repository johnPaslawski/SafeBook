using Safebook.EfCore.EFData;
using SafeBook.Domain.Persistence;
using SafeBook.EfCore.Infrastructure.Persistance.Implementations.Common;
using SafeBook.EfCore.Infrastructure.Persistance.Implementations.HRMS;
using SafeBook.EfCore.Infrastructure.Persistance.Implementations.MainPage;
using SafeBook.EfCore.Infrastructure.Persistance.Implementations.Shop;
using SafeBook.EfCore.Infrastructure.Persistance.Repositories.Common;
using SafeBook.EfCore.Infrastructure.Persistance.Repositories.HRMS;
using SafeBook.EfCore.Infrastructure.Persistance.Repositories.Shop;
using System;
using Microsoft.AspNetCore.Identity;
using SafeBook.Domain.Common;

namespace SafeBook.EfCore.Infrastructure.Persistance.Implementations.UOWs
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly SafeBookDbContext _safeBookDbContext;

        public IOrganizationRepository Organization { get; }
        public INewsRepository News { get; }
        public UserManager<AppUser> UserManager { get; }
        public IProjectsRepository Projects { get; }
        public RoleManager<IdentityRole> RoleManager { get; }
        public IProductsRepository Products { get; }
        public IProductCategoryRepository ProductCategories { get; }

        public UnitOfWork(SafeBookDbContext dbContext,
            UserManager<AppUser> userManager,
            RoleManager<IdentityRole> roleManager)
        {
            this._safeBookDbContext = dbContext;

            News = new NewsRepositoryEfCore(dbContext);
            UserManager = userManager;
            Projects = new ProjectsRepositoryEfCore(dbContext);
            RoleManager = roleManager;
            Products = new ProductsRepositoryEfCore(dbContext);
            ProductCategories = new ProductCategoryRepositoryEfCore(dbContext);
            Organization = new OrganizationRepositoryEfCore(dbContext);
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
