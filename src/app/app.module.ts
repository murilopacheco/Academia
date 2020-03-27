import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {AlunoModule} from './aluno/aluno.module';
import {MatNativeDateModule} from '@angular/material/core';
import {TurmaModule} from './turma/turma.module';
import {routing} from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    AlunoModule,
    MatNativeDateModule,
    TurmaModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
