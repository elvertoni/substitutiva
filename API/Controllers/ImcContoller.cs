using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[Route("api/imc")]
[ApiController]
public class ImcContoller : ControllerBase
{
	private readonly AppDataContext _context;
	public ImcContoller(AppDataContext context) => _context = context;

	[HttpPost]
	[Route("cadastrar")]
	public IActionResult Cadastrar([FromBody] Imc imc)

	{
		try
		{
			CalculadoraIMC(imc);
			Aluno? aluno = _context.Alunos.Find(imc.AlunoId);
			if (aluno == null)
			{
				return NotFound();
			}
			imc.Aluno = aluno;
			_context.Add(imc);
			_context.SaveChanges();
			return Created("", imc);
		}
		catch (Exception e)
		{

			return BadRequest(e.Message);
		}
	}

	[HttpPut]
	[Route("alterar/{id}")]
	public IActionResult Alterar([FromRoute] int id, [FromBody] Imc imc)

	{
		Imc? imcDB = _context.Imcs.Find(id);
		if (imcDB == null)
			return NotFound();

		if (imc.Peso != 0)
			imcDB.Peso = imc.Peso;

		if (imc.Altura != 0)
			imcDB.Altura = imc.Altura;

		if (imc.AlunoId != 0)
			imcDB.AlunoId = imc.AlunoId;

		CalculadoraIMC(imcDB);
		_context.Imcs.Update(imcDB);
		_context.SaveChanges();
		return Ok(_context.Imcs.Include(x => x.Aluno).ToList());
	}
	[HttpGet("CalcularIMC")]
	public void CalculadoraIMC(Imc imc)
	{
		imc.ValorIMC = imc.Peso / Math.Pow(imc.Altura, 2);
		if (imc.ValorIMC < 18.5)
			imc.Classificacao = "Magreza";
		else if (imc.ValorIMC < 25)
			imc.Classificacao = "Normal";
		else if (imc.ValorIMC < 30)
			imc.Classificacao = "Sobrepeso";
		else if (imc.ValorIMC < 40)
			imc.Classificacao = "Obesidade";
		else
			imc.Classificacao = "Obesidade Grave";

	}
}
