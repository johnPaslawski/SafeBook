using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SafeBook.Domain;
using Microsoft.EntityFrameworkCore;
using SafeBook.Domain.Common;

namespace SafeBook.EfCoreInMemory
{
    public class SafeBookDbContextInMemory : DbContext
    {
        public DbSet<News> News { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Offer> Offers { get; set; }
        public DbSet<User> Users { get; set; }
        

        public SafeBookDbContextInMemory(DbContextOptions<SafeBookDbContextInMemory> options) : base(options)
        {
        }

    }
}
