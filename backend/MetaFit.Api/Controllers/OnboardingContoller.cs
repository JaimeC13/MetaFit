
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using MetaFit.Application.Dtos;
using MetaFit.Application.service;


namespace MetaFit.Api.Controllers;


[Authorize] 
[ApiController]
[Route("api/[controller]")]



    