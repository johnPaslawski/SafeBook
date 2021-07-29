using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using SafeBook.Domain;
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
            }
        }

    }
}
