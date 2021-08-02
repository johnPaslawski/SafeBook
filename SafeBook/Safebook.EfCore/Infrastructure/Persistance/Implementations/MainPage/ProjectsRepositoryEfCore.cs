using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Safebook.EfCore.EFData;
using SafeBook.Domain;
using SafeBook.Domain.Persistence;

namespace SafeBook.EfCore.Infrastructure.Persistance.Implementations.MainPage
{
    public class ProjectsRepositoryEfCore : RepositoryEfCore<Project>, IProjectsRepository
    {
        public ProjectsRepositoryEfCore(SafeBookDbContext dbContext) : base(dbContext)
        {
        }

        public IEnumerable<Project> FindString(string like)
        {
            return GetDbContext().Projects
                    .Where(x => x.Title.Contains(like) || x.Description.Contains(like))
                    .ToList();
        }

        private SafeBookDbContext GetDbContext() => (SafeBookDbContext)_dbContext;
    }
}
