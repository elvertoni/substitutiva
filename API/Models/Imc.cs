using API.Models;

namespace API;
public class Imc
{
    public Imc() => DataCriacao = DateTime.Now;

    public int IMCId { get; set; }
    public double Altura { get; set; }
    public double Peso { get; set; }
    public double ValorIMC { get; set; }
    public string? Classificacao { get; set; }
    public DateTime DataCriacao { get; set; }
    public Aluno? Aluno { get; set; }
    public int AlunoId { get; set; }

}