using Safebook.Domain.Persistence;
using SafeBook.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SafeBook.EfCore.Infrastructure.Persistance.Repositories.Common
{
    public interface IRolesRepository : IRepository<Role>
    {
        Role GetUserRole(int userId);
        Role GetRole(int id);
        IEnumerable<Role> GetAllRoles();
    }
}
