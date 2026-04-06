
using Microsoft.AspNetCore.Mvc;
using MetaFit.Application.Dtos;
using MetaFit.Application.service;


namespace MetaFit.Api.Controllers;

[ApiController]
[Route("api/[controller]")]

public class AuthController : ControllerBase
{
    private readonly AuthService _authService;
    private readonly TokenService _tokenService;
    public AuthController(AuthService authService, TokenService tokenService)
{
    _authService = authService;
    _tokenService = tokenService; 
}





    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterRequest request)
    {
        var user = await _authService.RegisterAsync(request);

        if (user == null) return BadRequest("Email already in use.");

        return Ok(new { user.Id, user.FirstName, user.Email, user.Token });
       
    }







    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginRequest request)
    {
        var token = await _authService.LoginAsync(request);

        if (token == null)
        {
            return Unauthorized("Invalid email or password.");
        }

        return Ok(new {
            Token = token,
            message = "Login successful"
            });
    }



}
