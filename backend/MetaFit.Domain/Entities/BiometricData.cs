using MetaFit.Domain.Enums;
namespace MetaFit.Domain.Entities; 

public class BiometricData
{
    public int Id { get; set; }
    public int UserId { get; set; }

    public decimal Weight { get; set; }
    public decimal Height { get; set; }
    public int Age { get; set; }

    
    public decimal ActivityMultiplier { get; set; } 
    
    public ActivityType ActivityType { get; set; }
    public GoalStage Goal { get; set; }

    public decimal EstimatedFatPercentage { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
