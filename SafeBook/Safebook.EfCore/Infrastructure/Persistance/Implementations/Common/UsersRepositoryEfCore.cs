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
            var stringSplit = like.Split(' ');
            var result = new List<User>();

            foreach (var item in stringSplit)
            {
                var tempList = GetDbContext().Users
                    .Where(x => x.FirstName.Contains(item)
                    || x.LastName.Contains(item)
                    || x.AdressLine1.Contains(item)
                    || x.Email.Contains(item)
                    || x.PhoneNumber.Contains(item)) //do przemyślenia ten sposób wyszukiwania
                    .Include(x => x.Role)
                    .ToList();

               result = result.Concat(tempList).ToList();
            }
            return result;
        }


        private SafeBookDbContext GetDbContext() => (SafeBookDbContext)_dbContext;
    }
}
