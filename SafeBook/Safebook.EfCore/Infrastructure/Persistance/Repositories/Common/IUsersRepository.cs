using Safebook.Domain.Persistence;
using SafeBook.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SafeBook.Domain.Persistence
{
    public interface IUsersRepository : IRepository<User>
    {
        IEnumerable<User> FindString(string like);
        
    }
}
