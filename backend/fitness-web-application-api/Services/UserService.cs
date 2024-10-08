using fitness_web_application_api.Models;
using Microsoft.AspNetCore.Http.HttpResults;

public class UserService {
    private readonly IUserRepository _userRepository;
    
    public UserService(IUserRepository userRepository) {
        _userRepository = userRepository;
    }

    public async Task<User> RegisterUserAsync(string email, string password) {
        var newUser = new User {
            Email = email,
            Password = password
        };

        return await _userRepository.CreateUserAsync(newUser);
    }

    public async Task<bool> LoginUserAsync(string email, string password) {
        var existingUser = new User {
            Email = email,
            Password = password
        };

        return await _userRepository.ValidateUserAsync(existingUser);
    }

    public async Task<User> GetUserProfileByEmailAsync(string email) {
        if(string.IsNullOrEmpty(email)) {
            throw new Exception("Not Found"); 
        }

        return await _userRepository.GetUserByEmailAsync(email);
    }

}