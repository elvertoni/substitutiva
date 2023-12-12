import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Imc } from 'src/models/imc.models';

@Component({
  selector: 'app-listarimc',
  templateUrl: './listarimc.component.html',
  styleUrls: ['./listarimc.component.css']
})
export class ListarimcComponent {
  imcs: Imc[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Imc[]>("https://localhost:7223/api/imc/listar").subscribe({
      next:(imcs) => {
        this.imcs = imcs;
      },
      error: (erro) => {
        console.log(erro);
      },
    });
  }

}
