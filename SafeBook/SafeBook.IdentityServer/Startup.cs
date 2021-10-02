using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using NETCore.MailKit.Extensions;
using NETCore.MailKit.Infrastructure.Internal;
using SafeBook.Domain.Common;
using SafeBook.EfCore.Configuration;
using SafeBook.EfCore.EFData;

namespace SafeBook.IdentityServer
{
    public class Startup
    {
        public IConfiguration Configuration { get; }
        public UserManager<AppUser> UserManager { get; }
        public RoleManager<IdentityRole> RoleManager { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<SafeBookIdentityDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("Identity")));

            services.AddIdentity<AppUser, IdentityRole>(options =>
                {
                    options.Password.RequiredLength = 3;
                    options.Password.RequireDigit = false;
                    options.Password.RequireNonAlphanumeric = false;
                    options.Password.RequireUppercase = false;
                })
                .AddEntityFrameworkStores<SafeBookIdentityDbContext>()
                .AddDefaultTokenProviders();

            services.ConfigureApplicationCookie(options =>
            {
                options.Cookie.Name = "safebook.is4_delete_part_after_underscore";
                options.LoginPath = "/Auth/Login";
                options.LogoutPath = "/Auth/Logout";
            });

            services.AddIdentityServer()
                .AddAspNetIdentity<AppUser>()
                .AddInMemoryIdentityResources(IdentityServer.Configuration.IdentityResources)
                .AddInMemoryApiResources(IdentityServer.Configuration.ApiResources)
                .AddInMemoryApiScopes(IdentityServer.Configuration.ApiScopes)
                .AddInMemoryClients(IdentityServer.Configuration.Clients)
                .AddDeveloperSigningCredential(); // TODO production config

            services.AddMailKit(options =>
                options.UseMailKit(Configuration.GetSection("EmailConfiguration").Get<MailKitOptions>()));

            services.AddControllersWithViews();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseIdentityServer();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapDefaultControllerRoute();
            });
        }
    }
}
