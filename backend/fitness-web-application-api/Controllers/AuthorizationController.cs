using Microsoft.AspNetCore.Mvc;

namespace fitness_web_application_api.Controllers;

[ApiController]
[Route("[controller]")]
public class AuthorizationController : ControllerBase{
    private readonly ILogger<AuthorizationController> _logger;

    public AuthorizationController(ILogger<AuthorizationController> logger) {
        _logger = logger;
    }

    // [HttpPost(Name =="PostUser")]
    // public IEnumerable<User> AddUserInformationToDatabase()
    // {
    //     return NotImplementedException;
    // }
}