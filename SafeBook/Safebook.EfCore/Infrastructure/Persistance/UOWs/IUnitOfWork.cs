using SafeBook.EfCore.Infrastructure.Persistance.Repositories.Common;
using SafeBook.EfCore.Infrastructure.Persistance.Repositories.HRMS;
using SafeBook.EfCore.Infrastructure.Persistance.Repositories.Shop;
using System;
using Microsoft.AspNetCore.Identity;
using SafeBook.Domain.Common;

namespace SafeBook.Domain.Persistence
{

    public interface IUnitOfWork : IDisposable
    {
        IOrganizationRepository Organization { get; }
        INewsRepository News { get; }
        UserManager<AppUser> UserManager { get; }
        IProjectsRepository Projects { get; }
        RoleManager<IdentityRole> RoleManager { get; }
        IProductsRepository Products { get; }
        IProductCategoryRepository ProductCategories { get; }
        int Save();
    }
}
