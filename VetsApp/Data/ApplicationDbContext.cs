using Microsoft.EntityFrameworkCore;
using VetsApp.Model;

namespace VetsApp.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<Members> Members { get; set; }
    }
}
