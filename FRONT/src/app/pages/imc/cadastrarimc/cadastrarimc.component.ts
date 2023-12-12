import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Aluno } from "src/models/aluno.model";
import { Imc } from "src/models/imc.models";

@Component({
  selector: "app-cadastrarimc",
  templateUrl: "./cadastrarimc.component.html",
  styleUrls: ["./cadastrarimc.component.css"],
})
export class CadastrarimcComponent {
  constructor(private http: HttpClient, private router: Router) {}

  altura: number = 0;
  peso: number = 0;
  alunoId: number = 0;
  alunos: Aluno[] = [];

  ngOnInit(): void {
    this.http
      .get<Aluno[]>("https://localhost:7223/api/aluno/listar")
      .subscribe({
        next: (alunos) => {
          this.alunos = alunos;
        },
        error: (erro) => {
          console.log(erro);
        },
      });
  }
  cadastrar(): void {
    let imc: Imc = {
      altura: this.altura,
      peso: this.peso,
      alunoId: this.alunoId,
    };

    this.http
      .post<Imc>("https://localhost:7223/api/imc/cadastrar", imc)
      .subscribe({
        next: (imcs) => {
          this.router.navigate(["/pages/imc/cadastrar"]);
        },
        error:(erro) => {
          console.log(erro);
        }
      });
  }
}
