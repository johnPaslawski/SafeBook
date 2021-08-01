using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Safebook.Domain.Persistence;

namespace SafeBook.Domain.Persistence
{
    public interface INewsRepository : IRepository<News>
    {
        // Queries go here:
        IEnumerable<News> FindString(string like);
        
    }
}
