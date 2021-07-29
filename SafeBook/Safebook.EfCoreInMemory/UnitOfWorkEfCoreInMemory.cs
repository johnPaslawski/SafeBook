using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SafeBook.Domain.Persistence;

namespace SafeBook.EfCoreInMemory
{
    public class UnitOfWorkEfCoreInMemory : IUnitOfWork // TODO: should UOW be dependent on persistence implementation or aggregate them?
                                                        // aggregation seems more fragile but faster to use
    {
        private readonly SafeBookDbContextInMemory _safeBookDbContextInMemory;
        public INewsRepository News { get; }
        public IUsersRepository Users { get; }

        public UnitOfWorkEfCoreInMemory(SafeBookDbContextInMemory dbContext)
        {
            this._safeBookDbContextInMemory = dbContext;
            News = new NewsRepositoryEfCoreInMemory(dbContext);
            Users = new UsersRepositoryEfCoreInMemory(dbContext);
        }

        public int Save()
        {
            return _safeBookDbContextInMemory.SaveChanges();
        }
        public void Dispose()
        {
            _safeBookDbContextInMemory.Dispose();
            GC.SuppressFinalize(true);
        }
    }
}
