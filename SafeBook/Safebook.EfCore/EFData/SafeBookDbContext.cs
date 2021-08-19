using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SafeBook.Domain;
using SafeBook.Domain.Common;
using SafeBook.Domain.HRMS;
using SafeBook.Domain.Shop;
using SafeBook.EfCore.Configuration;

namespace Safebook.EfCore.EFData
{
    public class SafeBookDbContext : DbContext
    {
        public DbSet<Organization> Organization { get; set; }
        public DbSet<News> News { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductCategory> ProductCategories { get; set; }

        public SafeBookDbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            //modelBuilder.Entity<User>().Navigation(x => x.Role).AutoInclude();

            //modelBuilder.ApplyConfiguration(new RoleConfiguration());
            //modelBuilder.ApplyConfiguration(new NewsConfiguration());
            //modelBuilder.ApplyConfiguration(new ProjectConfiguration());          
            //modelBuilder.ApplyConfiguration(new UserConfiguration());

            //modelBuilder.ApplyConfiguration(new ProductCategoryConfiguration());
            //modelBuilder.ApplyConfiguration(new ProductConfiguration());

           // modelBuilder.ApplyConfiguration(new OrganizationConfiguration());
        }
    }
}
