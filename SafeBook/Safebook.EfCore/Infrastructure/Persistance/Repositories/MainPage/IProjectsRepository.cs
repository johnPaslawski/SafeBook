using Safebook.Domain.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SafeBook.Domain.Persistence
{
    public interface IProjectsRepository : IRepository<Project>
    {
        IEnumerable<Project> FindString(string like);
    }
}
