using fitness_web_application_api.Models;

public interface IUserRepository
{
    Task<User> CreateUserAsync(User user);
}