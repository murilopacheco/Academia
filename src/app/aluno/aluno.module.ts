import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlunoComponent} from './aluno.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {AlunoRoutingModule} from './aluno.routing.module';
import {AlunoDetalheComponent} from './aluno-detalhe/aluno-detalhe.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {AlunoService} from './aluno.service';
import {HttpClientModule} from '@angular/common/http'; // <-- NgModel lives here


@NgModule({
  declarations: [AlunoComponent, AlunoDetalheComponent],
  exports: [
    AlunoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AlunoRoutingModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [
    AlunoService
  ],
})
export class AlunoModule { }
