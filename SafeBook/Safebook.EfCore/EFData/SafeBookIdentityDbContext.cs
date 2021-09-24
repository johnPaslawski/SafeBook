using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SafeBook.Domain.Common;

namespace SafeBook.EfCore.EFData
{
    public class SafeBookIdentityDbContext : IdentityDbContext<AppUser>
    {
        public SafeBookIdentityDbContext(DbContextOptions<SafeBookIdentityDbContext> options)
            : base(options)
        {
        }
    }
}
