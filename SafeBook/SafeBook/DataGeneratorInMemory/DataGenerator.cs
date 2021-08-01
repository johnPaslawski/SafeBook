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

                News news = new News { CreationDate = DateTime.Now, Description = "fsdfsdDecription of this cool news", Title = "News nr 1" };
                News news2 = new News { CreationDate = DateTime.Now, Description = "asdasdasdasd of this cool news", Title = "News nr 2" };
                News news3 = new News { CreationDate = DateTime.Now, Description = "rtyrtyrty of this cool news", Title = "News nr 3" };

                context.AddRange(news, news2, news3);

                context.SaveChanges();

                User user1 = new User { Id = 1, AdressLine1 = "Krótka 4/56", BirthDate = DateTime.Now, City = "Kraków", FirstName = "Adam", LastName = "Stary", PostalCode = "30-004", Role = new Role { Id = 1, Name = "Admin" } };
                User user2 = new User { Id = 2, AdressLine1 = "Długa 98/3", BirthDate = DateTime.Now, City = "Poznań", FirstName = "Magda", LastName = "Młoda", PostalCode = "23-323",  Role = new Role { Id = 2, Name = "Member" } };
                User user3 = new User { Id = 3, AdressLine1 = "Lipna 10/5c", BirthDate = DateTime.Now, City = "Kraków", FirstName = "Lech", LastName = "Nijaki", PostalCode = "50-111",  Role = new Role { Id = 3, Name = "BoardMember" } };

                //context.Users.Add(user1);
                //context.Users.Add(user2);
                //context.Users.Add(user3);

                context.Users.AddRange(user1, user2, user3);

                context.SaveChanges();

                //Role role1 = new Role { Id = 1, Name = "Admin" };
                //Role role2 = new Role { Id = 2, Name = "BoardMember" };
                //Role role3 = new Role { Id = 3, Name = "Member" };
                //Role role4 = new Role { Id = 4, Name = "RegularUser" };
                //Role role5 = new Role { Id = 5, Name = "Anonymous" };

                //context.Roles.Add(role1);
                //context.Roles.Add(role2);
                //context.Roles.Add(role3);
                //context.Roles.Add(role4);
                //context.Roles.Add(role5);

                //context.SaveChanges();

                Project project1 = new Project { Id = 1, Title = "Taki fajny projekt", Description = "kolejny ładny projekt", CreationDate = DateTime.Now};
                Project project2 = new Project { Id = 2, Title = "A ten jaki ładny", Description = "dobrze kolega mówi, zacny", CreationDate = DateTime.Now};
                Project project3 = new Project { Id = 3, Title = "No, ten to nie siadł", Description = "program ewidentnie im nie leżał", CreationDate = DateTime.Now};

                context.Projects.Add(project1);
                context.Projects.Add(project2);
                context.Projects.Add(project3);

                context.SaveChanges();

            }
        }

    }
}
