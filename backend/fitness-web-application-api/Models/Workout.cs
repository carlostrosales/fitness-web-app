using fitness_web_application_api.Models;

public class Workout
{   
    public int WorkoutId { get; set; }
    public string? Title { get; set; }

    // Foreign Key for User
    public int UserId { get; set; }

    // Navigation property for User
    public User? User { get; set; }

    //Navigation property for the many-to-many relationship with Exercises
    public virtual ICollection<WorkoutExercise>? WorkoutExercises { get; set; }
}