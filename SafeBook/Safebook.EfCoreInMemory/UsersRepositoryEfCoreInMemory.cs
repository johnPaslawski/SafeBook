using SafeBook.Domain.Common;
using SafeBook.Domain.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SafeBook.EfCoreInMemory
{
    public class UsersRepositoryEfCoreInMemory : RepositoryEfCoreInMemory<User>, IUsersRepository
    {
        public UsersRepositoryEfCoreInMemory(SafeBookDbContextInMemory dbContext) : base(dbContext)
        {
        }
    }
}
