using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;
namespace fitness_web_application_api.Models;

public class User {
    [Key]
    public int Id { get; set;}
    public required String Email { get; set;}

    public required String Password { get; set;}
}