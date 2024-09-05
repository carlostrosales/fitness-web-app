using fitness_web_application_api.Models;
using Microsoft.EntityFrameworkCore;

namespace fitness_web_application_api.Data
{
    public class ApplicationDbContext : DbContext{
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        } 

        public DbSet<User> Users {get; set;}
    }
}