using BEwebsiteTC.Models;
using Microsoft.EntityFrameworkCore;

namespace BEwebsiteTC
{
    public class AplicationDbContext : DbContext
    {
        public DbSet<TarjetaCredito> TarjetaCredito { get; set; }
        public AplicationDbContext(DbContextOptions<AplicationDbContext> options) : base(options) { }
    }
}
