import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CadastraralunoComponent } from "./pages/aluno/cadastraraluno/cadastraraluno.component";
import { ListaralunoComponent } from "./pages/aluno/listaraluno/listaraluno.component";
import { CadastrarimcComponent } from "./pages/imc/cadastrarimc/cadastrarimc.component";
import { ListarimcComponent } from "./pages/imc/listarimc/listarimc.component";
import { AlterarimcComponent } from "./pages/imc/alterarimc/alterarimc.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CadastraralunoComponent,
    ListaralunoComponent,
    CadastrarimcComponent,
    ListarimcComponent,
    AlterarimcComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}