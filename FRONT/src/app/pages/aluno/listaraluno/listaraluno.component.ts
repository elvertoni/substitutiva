import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Aluno } from "src/models/aluno.model";

@Component({
  selector: "app-listaraluno",
  templateUrl: "./listaraluno.component.html",
  styleUrls: ["./listaraluno.component.css"],
})
export class ListaralunoComponent {
  alunos: Aluno[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Aluno[]>("https://localhost:7223/api/aluno/listar").subscribe({
      next:(alunos) => {
        this.alunos = alunos;
      },
      error: (erro) => {
        console.log(erro);
      },
    });
  }
}
