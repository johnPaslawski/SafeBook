using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using SafeBook.DataGeneratorInMemory;
using SafeBook.EfCoreInMemory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SafeBook
{
    public class Program
    {
        public static void Main(string[] args)
        {
            // genuine configuration:
            // CreateHostBuilder(args).Build().Run();


            // In memory Db configuration: ////////////////////////////////////////////
            
            var host = CreateHostBuilder(args).Build();
           
            using (var scope = host.Services.CreateScope())
            {               
                var services = scope.ServiceProvider;
                var context = services.GetRequiredService<SafeBookDbContextInMemory>();
   
                DataGenerator.Initialize(services);
            }

            host.Run();
            ///////////////////////////////////////////////////////////////////////////
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
