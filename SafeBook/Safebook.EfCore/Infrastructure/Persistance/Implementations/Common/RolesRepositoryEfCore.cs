using Microsoft.EntityFrameworkCore;
using Safebook.EfCore.EFData;
using SafeBook.Domain.Common;
using SafeBook.EfCore.Infrastructure.Persistance.Repositories.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SafeBook.EfCore.Infrastructure.Persistance.Implementations.Common
{
    public class RolesRepositoryEfCore : RepositoryEfCore<Role>, IRolesRepository
    {
        public RolesRepositoryEfCore(SafeBookDbContext dbContext) : base(dbContext)
        {
        }

        public Role GetUserRole(int userId)
        {
            var user = GetDbContext().Users
                .Where(x => x.Id == userId)
                .Include(x => x.Role)
                .FirstOrDefault();

            return user.Role;           
        }

        public Role GetRole(int id)
        {
            var role = GetDbContext().Roles
                .Where(x => x.Id == id)
                .Include(x => x.Users)
                .FirstOrDefault();

            return role;
        }

        public IEnumerable<Role> GetAllRoles()
        {
            var roles = GetDbContext().Set<Role>().ToList();

            return roles;
        }
        private SafeBookDbContext GetDbContext() => (SafeBookDbContext)_dbContext;

    }
}
