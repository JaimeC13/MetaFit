using System.ComponentModel.DataAnnotations; 
using MetaFit.Domain.Enums; 

namespace MetaFit.Application.Dtos;


public class Biometrics
{
    [Required(ErrorMessage = "El peso es obligatorio")]
    [Range(20, 500, ErrorMessage = "Peso fuera de rango (20kg - 500kg)")]
    public decimal Weight { get; set; }

    [Required(ErrorMessage = "La altura es obligatoria")]
    [Range(50, 250, ErrorMessage = "Altura fuera de rango (50cm - 250cm)")]
    public decimal Height { get; set; }

    [Required(ErrorMessage = "La edad es obligatoria")]
    [Range(1, 120, ErrorMessage = "Edad debe estar entre 1 y 120 años")]
    public int Age { get; set; }

    [Required]
    [Range(1.0, 2.5, ErrorMessage = "El multiplicador debe ser entre 1.0 y 2.5")]
    public decimal ActivityMultiplier { get; set; }

    [Required(ErrorMessage = "El tipo de actividad es obligatorio")]
    public ActivityType ActivityType { get; set; }

    [Required(ErrorMessage = "El objetivo es obligatorio")]
    public GoalStage Goal { get; set; }

    [Range(3, 70, ErrorMessage = "El porcentaje de grasa debe ser entre 3% y 70%")]
    public decimal EstimatedFatPercentage { get; set; }
}