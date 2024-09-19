public class Exercise
{
    public int ExerciseId { get; set; }
    public string? Title { get; set; }
    public string? Workout { get; set; }
    
    
    // Navigation property for the many-to-many relationship with Workouts
    public ICollection<WorkoutExercise>? WorkoutExercises { get; set; }
}