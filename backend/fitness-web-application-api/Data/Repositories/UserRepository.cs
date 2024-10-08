using fitness_web_application_api.Data;
using fitness_web_application_api.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

public class UserRepository : IUserRepository {
    private readonly ApplicationDbContext _dbContext;

    public UserRepository(ApplicationDbContext dbContext) {
        _dbContext = dbContext;
    }

    public async Task<User> CreateUserAsync(User user) {
        _dbContext.Users.Add(user);
        await _dbContext.SaveChangesAsync();
        return user;
    }

    public async Task<bool> ValidateUserAsync(User user) {
        bool validatedUserExists = await _dbContext.Users.AnyAsync(u => u.Email.Equals(user.Email)
        & u.Password.Equals(user.Password));

        return validatedUserExists;
    }

    public async Task<User> GetUserByEmailAsync(string email) {
        User? user = await _dbContext.Users.FirstOrDefaultAsync(u => u.Email == email)
        ?? throw new InvalidOperationException("User not found.");
        return user;
    }
}