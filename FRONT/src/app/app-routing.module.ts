import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListaralunoComponent } from "./pages/aluno/listaraluno/listaraluno.component";
import { CadastraralunoComponent } from "./pages/aluno/cadastraraluno/cadastraraluno.component";
import { ListarimcComponent } from "./pages/imc/listarimc/listarimc.component";
import { CadastrarimcComponent } from "./pages/imc/cadastrarimc/cadastrarimc.component";
import { AlterarimcComponent } from "./pages/imc/alterarimc/alterarimc.component";

const routes: Routes = [
  {
    path: "",
    component: ListaralunoComponent,
  },
  {
    path: "pages/aluno/listar",
    component: ListaralunoComponent,
  },
  {
    path: "pages/aluno/cadastrar",
    component: CadastraralunoComponent,
  },
  {
    path: "pages/imc/listar",
    component: ListarimcComponent,
  },
  {
    path: "pages/imc/cadastrar",
    component: CadastrarimcComponent,
  },
  {
    path: "pages/imc/alterar",
    component: AlterarimcComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
