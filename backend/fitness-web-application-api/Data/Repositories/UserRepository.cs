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
        & u.PasswordHash.Equals(user.PasswordHash));

        return validatedUserExists;
    }
}