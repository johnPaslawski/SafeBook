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

        private SafeBookDbContextInMemory GetInMemoryDbContext() => (SafeBookDbContextInMemory) _dbContext;
    }
}
