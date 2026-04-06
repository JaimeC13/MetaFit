namespace MetaFit.Domain.Entities;


public class BodyMeasurement
{
    public int Id { get; set; }

    public int UserId { get; set; }

    public decimal Chest { get; set; }
    public decimal Back { get; set; }
    public decimal Waist { get; set; }
    public decimal Hip { get; set; }
    public decimal Biceps { get; set; }
    public decimal Forearm { get; set; }
    public decimal Thigh { get; set; }
    public decimal Calf { get; set; }
    public decimal Shoulders { get; set; }

    public DateTime MeasurementDate { get; set; } = DateTime.UtcNow;

    public User User { get; set; } = null!;
}
