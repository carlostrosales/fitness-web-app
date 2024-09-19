using Microsoft.AspNetCore.Mvc;
using fitness_web_application_api.Models;
using fitness_web_application_api.Data;

namespace fitness_web_application_api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthorizationController : ControllerBase{
    private readonly ILogger<AuthorizationController> _logger;
    private readonly UserService _userService;

    public AuthorizationController(ILogger<AuthorizationController> logger, UserService userService) {
        _logger = logger;
        _userService = userService;
    }

    [HttpPost]
    public async Task<IActionResult> CreateUser([FromBody] User user)
    {
        if (user == null || string.IsNullOrEmpty(user.Email) || string.IsNullOrEmpty(user.Password)) {
            return BadRequest("Invalid User Data.");
        }

        try {
            var createdUser = await _userService.RegisterUserAsync(user.Email, user.Password);
            return Ok(createdUser); 

        } catch (Exception ex) {
            return BadRequest(ex.Message);
        }
    }

    [HttpGet]
    public async Task<IActionResult> LoginUser([FromQuery] User user)
    {
        if (user == null || string.IsNullOrEmpty(user.Email) || string.IsNullOrEmpty(user.Password))
        {
            return BadRequest("Invalid User Data");
        }

        try {
            var isLoginSuccessful = await _userService.LoginUserAsync(user.Email, user.Password);

            if (!isLoginSuccessful) {
                return Unauthorized("Invalid credentials.");
            }

            var loggedInUser = await _userService.GetUserProfileByEmailAsync(user.Email);
            if (loggedInUser == null) {
                return Unauthorized("User is not found");
            }

            // store user details in the session
            HttpContext.Session.SetString("UserId", loggedInUser.UserId.ToString());
            HttpContext.Session.SetString("Email", loggedInUser.Email);
            HttpContext.Session.SetString("LastAccessed", DateTime.UtcNow.ToString());

            return Ok(new { Message = "Logged in successfully"});

        } catch(Exception ex) {
            return BadRequest(ex.Message);
        }
    }
}