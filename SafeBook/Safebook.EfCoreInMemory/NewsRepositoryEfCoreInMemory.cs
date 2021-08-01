using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SafeBook.Domain;
using SafeBook.Domain.Persistence;

namespace SafeBook.EfCoreInMemory
{
    public class NewsRepositoryEfCoreInMemory : RepositoryEfCoreInMemory<News>, INewsRepository
    {
        public NewsRepositoryEfCoreInMemory(SafeBookDbContextInMemory dbContext) : base(dbContext)
        {
        }

        public IEnumerable<News> FindString(string like)
        {
            return GetInMemoryDbContext().News
                    .Where(x => x.Title.Contains(like) || x.Description.Contains(like))
                    .ToList();
        }



        private SafeBookDbContextInMemory GetInMemoryDbContext() => (SafeBookDbContextInMemory)_dbContext;
    }
}
