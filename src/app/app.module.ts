import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProfessoresComponent} from './professores-angular/professores.component';
import { CursosComponent } from './cursos-angular/cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfessoresComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
