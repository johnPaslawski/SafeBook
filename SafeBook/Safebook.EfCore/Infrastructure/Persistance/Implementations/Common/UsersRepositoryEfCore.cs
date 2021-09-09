using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Safebook.EfCore.EFData;
using SafeBook.Domain;
using SafeBook.Domain.Common;
using SafeBook.Domain.Persistence;

namespace SafeBook.EfCore.Infrastructure.Persistance.Implementations.Common
{
    public class UsersRepositoryEfCore : RepositoryEfCore<User>, IUsersRepository
    {
        public UsersRepositoryEfCore(SafeBookDbContext dbContext) : base(dbContext)
        {
        }

        public override User Get(int id)
        {
            return GetDbContext().Users
                .Where(x => x.Id == id)
                .Include(x => x.Role)
                .FirstOrDefault();
        }

        public override IEnumerable<User> GetAll()
        {
            return GetDbContext().Users
                .Include(x => x.Role);
        }

        public IEnumerable<User> FindByString(string like)
        {
            return GetDbContext().Users
                    .Where(x => x.FirstName.Contains(like) 
                    || x.LastName.Contains(like)
                    || x.AdressLine1.Contains(like)
                    || x.Email.Contains(like)
                    || x.PhoneNumber.Contains(like)) //do przemyślenia ten sposób wyszukiwania
                    .Include(x => x.Role)
                    .ToList();
        }


        private SafeBookDbContext GetDbContext() => (SafeBookDbContext)_dbContext;
    }
}
