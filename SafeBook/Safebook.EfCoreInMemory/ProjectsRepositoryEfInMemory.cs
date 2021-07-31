using SafeBook.Domain;
using SafeBook.Domain.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SafeBook.EfCoreInMemory
{
    public class ProjectsRepositoryEfInMemory : RepositoryEfCoreInMemory<Project>, IProjectsRepository
    {
        public ProjectsRepositoryEfInMemory(SafeBookDbContextInMemory dbContext) : base(dbContext)
        {
        }
    }
}
