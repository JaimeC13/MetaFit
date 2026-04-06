using System.ComponentModel.DataAnnotations;
namespace  MetaFit.Domain.Entities;



public class User
{
    [Key]
    public int Id { get; set; }

    [Required()]
    [StringLength(50, MinimumLength = 2)]
    public string FirstName { get; set; } = string.Empty;
    [Required]
    [StringLength(50)]
    public string LastName { get; set; } = string.Empty;   

    [Required]
    [EmailAddress()] 
    public string Email { get; set; } = string.Empty;
    [Required]
    public string PasswordHash { get; set; } = string.Empty;
    [Required]
    public DateTime BirthDate { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

//relaciones
    public BiometricData? BiometricData { get; set; }
    public ICollection <BodyMeasurement> Measurements { get; set; } = new List<BodyMeasurement>();

}

