using Microsoft.EntityFrameworkCore;
namespace fitness_web_application_api.Models;

[Keyless]
public class User {
    public String Email { get; set;}

    public String Password { get; set;}
}