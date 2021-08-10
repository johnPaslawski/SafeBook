using Microsoft.EntityFrameworkCore;
using Safebook.EfCore.EFData;
using SafeBook.Domain.HRMS;
using SafeBook.EfCore.Infrastructure.Persistance.Repositories.HRMS;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SafeBook.EfCore.Infrastructure.Persistance.Implementations.HRMS
{
    public class OrganizationRepositoryEfCore : RepositoryEfCore<Organization>, IOrganizationRepository
    {
        public OrganizationRepositoryEfCore(DbContext dbContext) : base(dbContext)
        {
        }

        public Organization GetOrganizationWithMembersList()
        {
            return GetDbContext().Organization
                .Where(x => x.Id == 1)
                .Include(x => x.MembersList)
                .FirstOrDefault();
                
                
        }

        private SafeBookDbContext GetDbContext() => (SafeBookDbContext)_dbContext;
    }
}
