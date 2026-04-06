
// 1. EL CONSTRUCTOR (The Builder)
using Microsoft.EntityFrameworkCore;
using MetaFit.Infrastructure.Persistence;
using MetaFit.Application.service;

var builder = WebApplication.CreateBuilder(args);

// 2. CONFIGURACIÓN DE SERVICIOS (La Caja de Herramientas)
// Leemos la dirección de la base de datos del archivo appsettings.json
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

// Registramos el DbContext en el sistema de Inyección de Dependencias
builder.Services.AddDbContext<MetaFitDbContext>(options =>
    options.UseSqlServer(connectionString, 
        b => b.MigrationsAssembly("MetaFit.Infrastructure")));

builder.Services.AddScoped<AuthService>(); 

builder.Services.AddScoped<TokenService>();

// Registramos el soporte para Controladores (API profesional)
builder.Services.AddControllers();


// Agregamos Swagger para documentar la API
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// 3. CONSTRUCCIÓN (The Build)
var app = builder.Build();

// 4. CONFIGURACIÓN DEL PIPELINE (Middlewares - Las Estaciones)
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(); // Activa la interfaz visual de Swagger
}

app.UseHttpsRedirection();

// Seguridad: Quién puede entrar a la API
app.UseAuthorization();

// 5. MAPEADO DE RUTAS (The Directory)
app.MapControllers();

// Health Check: Ruta rápida para saber si la API está viva
app.MapGet("/", () => "api");

// 6. ENCENDIDO
app.Run();