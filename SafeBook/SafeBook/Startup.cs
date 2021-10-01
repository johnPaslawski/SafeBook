using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using Safebook.EfCore.EFData;
using SafeBook.Domain.Persistence;
using SafeBook.EfCore.Infrastructure.Persistance.Implementations.UOWs;
using System.Reflection;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using SafeBook.Domain.Common;
using SafeBook.EfCore.EFData;

namespace SafeBook
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAuthentication("Bearer")
                .AddJwtBearer("Bearer", options =>
                {
                    options.Authority = "https://localhost:44312";
                    options.Audience = "SafeBookApi";
                    options.TokenValidationParameters = new TokenValidationParameters()
                    {
                        ClockSkew = TimeSpan.Zero,
                    };
                });

            services.AddAuthorization();

            services.AddCors(options =>
            {
                options.AddDefaultPolicy(
                    builder =>
                    {
                        builder.WithOrigins("https://localhost:44366").AllowAnyHeader().AllowAnyMethod();                      
                    });
            });

            services.AddControllers()
                .AddNewtonsoftJson(x =>
            {
                x.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
            }); ;

            //Database Injection:
            //services.AddDbContext<SafeBookDbContextInMemory>(options => options.UseInMemoryDatabase("SafeBookInMemoryDb"));           
            services.AddDbContext<SafeBookDbContext>(x => x.UseSqlServer(Configuration.GetConnectionString("MssqlConnection")));
            services.AddDbContext<SafeBookIdentityDbContext>(x => x.UseSqlServer(Configuration.GetConnectionString("Identity")));

            services.AddIdentity<AppUser, IdentityRole>()
                .AddEntityFrameworkStores<SafeBookIdentityDbContext>()
                .AddDefaultTokenProviders();
            
            // UnitOfWork Injection:
            services.AddScoped<IUnitOfWork, UnitOfWork>();

            // Automapper:
            services.AddAutoMapper(Assembly.GetExecutingAssembly());

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "SafeBook", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "SafeBook v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

        }
        
    }
}
