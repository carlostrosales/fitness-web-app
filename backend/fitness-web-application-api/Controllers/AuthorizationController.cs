using Microsoft.AspNetCore.Mvc;
using fitness_web_application_api.Models;
using fitness_web_application_api.Data;

namespace fitness_web_application_api.Controllers;

[ApiController]
[Route("[controller]")]
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
}