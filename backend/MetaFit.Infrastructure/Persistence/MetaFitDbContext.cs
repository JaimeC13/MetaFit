using Microsoft.EntityFrameworkCore;
using MetaFit.Domain.Entities;

namespace MetaFit.Infrastructure.Persistence;


public class MetaFitDbContext : DbContext
{
    
    public MetaFitDbContext(DbContextOptions<MetaFitDbContext> options) : base(options) { }

    public DbSet<User> Users { get; set; }
    public DbSet<BiometricData> Biometrics { get; set; }
    public DbSet<BodyMeasurement> Measurements { get; set; }
    public DbSet<Exercise> Exercises { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<BiometricData>()
            .Property(b => b.Weight)
            .HasColumnType("decimal(18,2)");

        base.OnModelCreating(modelBuilder);
    }
}