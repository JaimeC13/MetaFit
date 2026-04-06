
using System.IdentityModel.Tokens.Jwt; 
using System.Security.Claims;  
using System.Text;    
using Microsoft.IdentityModel.Tokens; 
using MetaFit.Domain.Entities;    
using Microsoft.Extensions.Configuration; 

namespace MetaFit.Application.service;

public class TokenService
{
    private readonly IConfiguration _config; 

    public TokenService(IConfiguration config)
{
    _config = config;
}


public string GenerateToken(User user)
{
    var claims = new List<Claim>
    {
        new Claim(JwtRegisteredClaimNames.NameId, user.Id.ToString()),
        new Claim(JwtRegisteredClaimNames.Email, user.Email),
    };



var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]!));
var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);



var tokenDescriptor = new SecurityTokenDescriptor
{
    Subject = new ClaimsIdentity(claims),
    Expires = DateTime.UtcNow.AddHours(1),
    SigningCredentials = creds,
    Issuer = _config["Jwt:Issuer"],
    Audience = _config["Jwt:Audience"]
};



var tokenHandler = new JwtSecurityTokenHandler();
var token = tokenHandler.CreateToken(tokenDescriptor);

return tokenHandler.WriteToken(token);


}
}