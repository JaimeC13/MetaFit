using Microsoft.EntityFrameworkCore;
using MetaFit.Application.Dtos;
using MetaFit.Domain.Entities;
using MetaFit.Infrastructure.Persistence;
using BC = BCrypt.Net.BCrypt;


namespace MetaFit.Application.service;


public class AuthService
{


private readonly MetaFitDbContext _context;

private readonly TokenService _tokenService;
 

 public AuthService(MetaFitDbContext context, TokenService tokenService)
    {
        _context = context;
        _tokenService = tokenService;
    }

    public async Task<AuthResponseDto?> RegisterAsync(RegisterRequest request)
    
    {
        if (await _context.Users.AnyAsync(u => u.Email == request.Email))
            return null;

        string passwordHash = BC.HashPassword(request.Password); //variable passaword del dto que sea paso como parametro 

       
        var NewUser = new User
        {
            FirstName = request.Username, 
            LastName = request.LastName,
            Email = request.Email,
            PasswordHash = passwordHash, 
            BirthDate = DateTime.Parse(request.BirthDate)
        };

        _context.Users.Add(NewUser);
        await _context.SaveChangesAsync();

        var token = _tokenService.GenerateToken(NewUser);

        return new AuthResponseDto{
        Id = NewUser.Id,
        FirstName = NewUser.FirstName,
        Email = NewUser.Email,
        Token = token
        
    };







  

      

    }



    public async Task<string?> LoginAsync(LoginRequest request)
    {
    var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == request.Email);

    if(user == null)
        return null;

         bool isValid = BC.Verify(request.Password, user.PasswordHash);

          if (!isValid) return null;

        return _tokenService.GenerateToken(user);

    }

}