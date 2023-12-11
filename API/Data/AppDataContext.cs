using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class AppDataContext : DbContext
{
	public
	AppDataContext(DbContextOptions<AppDataContext> options) : base(options) { }

	//classes que quero que virem tabela no banco
	public DbSet<Aluno> Alunos { get; set; }
	public DbSet<Imc> Imcs { get; set; }
	
}