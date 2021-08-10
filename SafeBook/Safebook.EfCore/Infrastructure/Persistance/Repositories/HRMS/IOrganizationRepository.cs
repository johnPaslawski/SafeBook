using Safebook.Domain.Persistence;
using SafeBook.Domain.HRMS;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SafeBook.EfCore.Infrastructure.Persistance.Repositories.HRMS
{
    public interface IOrganizationRepository : IRepository<Organization>
    {
        Organization GetOrganizationWithMembersList();
    }
}
