using fitness_web_application_api.Models;

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

}