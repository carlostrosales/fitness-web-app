public class CreateWorkoutRequest
{
    public string WorkoutTitle { get; set;}
    public ExerciseDto Exercise { get; set; }
    public int UserId { get; set; }
}

public class ExerciseDto
{
    public string Title { get; set; }
    public int Sets { get; set; }
    public int Reps { get; set; }
    public int Weight { get; set; }
}