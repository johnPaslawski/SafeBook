using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using SafeBook.Domain;
using SafeBook.Domain.Common;
using SafeBook.EfCoreInMemory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SafeBook.DataGeneratorInMemory
{
    public class DataGenerator
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new SafeBookDbContextInMemory(
                serviceProvider.GetRequiredService<DbContextOptions<SafeBookDbContextInMemory>>()))
            {
                // Look for any board games.
                if (context.News.Any())
                {
                    return;   // Data was already seeded
                }

                News news = new News { Id = 1, CreationDate = DateTime.Now, Description = "fsdfsdDecription of this cool news", Title = "News nr 1" };
                News news2 = new News { Id = 2, CreationDate = DateTime.Now, Description = "asdasdasdasd of this cool news", Title = "News nr 2" };
                News news3 = new News { Id = 3, CreationDate = DateTime.Now, Description = "rtyrtyrty of this cool news", Title = "News nr 3" };

                context.News.Add(news);
                context.News.Add(news2);
                context.News.Add(news3);

                context.SaveChanges();

                User user1 = new User { Id = 1, AdressLine1 = "Krótka 4/56", BirthDate = DateTime.Now, City = "Kraków", FirstName = "Adam", LastName = "Stary", PostalCode = "30-004", Role = new Role { Id = 1, Name = "Admin" } };
                User user2 = new User { Id = 2, AdressLine1 = "Długa 98/3", BirthDate = DateTime.Now, City = "Poznań", FirstName = "Magda", LastName = "Młoda", PostalCode = "23-323",  Role = new Role { Id = 2, Name = "Member" } };
                User user3 = new User { Id = 3, AdressLine1 = "Lipna 10/5c", BirthDate = DateTime.Now, City = "Kraków", FirstName = "Lech", LastName = "Nijaki", PostalCode = "50-111",  Role = new Role { Id = 3, Name = "BoardMember" } };

                context.Users.Add(user1);
                context.Users.Add(user2);
                context.Users.Add(user3);

                context.SaveChanges();
            }
        }

    }
}
