using Safebook.EfCore.EFData;
using SafeBook.Domain;
using SafeBook.Domain.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SafeBook.EfCore.Infrastructure.Persistance.Implementations.MainPage
{
    public class NewsRepositoryEfCore : RepositoryEfCore<News>, INewsRepository
    {
        public NewsRepositoryEfCore(SafeBookDbContext dbContext) : base(dbContext)
        {
        }

        public IEnumerable<News> FindString(string like)
        {
            return GetDbContext().News
                    .Where(x => x.Title.Contains(like) || x.Description.Contains(like))
                    .ToList();
        }

        private SafeBookDbContext GetDbContext() => (SafeBookDbContext)_dbContext;
    }
}
