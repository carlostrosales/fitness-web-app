using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;
namespace fitness_web_application_api.Models;

public class User {
    [Key]
    public int UserId { get; set;}
    public required String Email { get; set;}
    public required String Password { get; set;}

    // Navigation Property
    public virtual ICollection<Workout>? Workouts { get; set; }
}