using fitness_web_application_api.Models;

public interface IUserRepository
{
    Task<User> CreateUserAsync(User user);
    Task<bool> ValidateUserAsync(User user);

    Task<User> GetUserByEmailAsync(string email);
}