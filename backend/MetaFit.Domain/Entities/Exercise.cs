
using MetaFit.Domain.Enums;

namespace MetaFit.Domain.Entities;

public class Exercise
{
    public int Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public string Description { get; set; } = string.Empty;

  
    public ExerciseCategory Category { get; set; }

    public DifficultyLevel Difficulty { get; set; }

    public string VideoUrl { get; set; } = string.Empty;

    public bool DetectTechnique { get; set; }

    public bool IsUnlocked { get; set; } = true;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;


}