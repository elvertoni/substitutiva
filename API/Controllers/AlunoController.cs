using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[Route("api/aluno")]
[ApiController]
public class AlunoController : ControllerBase
{
	private readonly AppDataContext _context;
	public AlunoController(AppDataContext context) => _context = context;

	[HttpPost]
	[Route("cadastrar")]
	public IActionResult Cadastrar([FromBody] Aluno aluno)

	{
		try
		{
			_context.Add(aluno);
			_context.SaveChanges();
			return Created("", aluno);
		}
		catch (Exception e)

		{
			return BadRequest(e.Message);
		}
	}
	
	[HttpGet]
	[Route("listar")]
	public IActionResult Listar()
	
	{
		try
		{
			List<Aluno> alunos = _context.Alunos.ToList();
			return Ok (alunos);
		}
		catch (Exception e)
		{
			
			return BadRequest(e.Message);
		}
	}
	
}
