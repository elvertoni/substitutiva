import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { Aluno } from 'src/models/aluno.model';

@Component({
  selector: 'app-cadastraraluno',
  templateUrl: './cadastraraluno.component.html',
  styleUrls: ['./cadastraraluno.component.css']
})
export class CadastraralunoComponent {
  
  constructor(private http:HttpClient, private router: Router) {}

  nome: string = "";
  nascimento: string = "";

  cadastrar() : void {
    let aluno: Aluno = {
      nome: this.nome,
      nascimento: this.nascimento,
    };
    this.http.post<Aluno>("https://localhost:7223/api/aluno/cadastrar", aluno).subscribe({
      next:(aluno) => {
        this.router.navigate(["/pages/aluno/listar"]);
      },
      error:(erro) => {
        console.log(erro);
      },
    });
  }
}
