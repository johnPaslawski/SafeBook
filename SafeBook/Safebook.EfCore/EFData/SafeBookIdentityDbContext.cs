using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace SafeBook.EfCore.EFData
{
    public class SafeBookIdentityDbContext : IdentityDbContext
    {
        public SafeBookIdentityDbContext(DbContextOptions<SafeBookIdentityDbContext> options)
            : base(options)
        {
        }
    }
}
