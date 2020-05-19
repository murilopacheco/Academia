import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TurmaComponent} from './turma.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {TurmaDetalheComponent} from './turma-detalhe/turma-detalhe.component';
import {MatNativeDateModule} from '@angular/material/core';
import {TurmaRoutingModule} from './turma.routing.module';
import {TurmaService} from './turma.service';
import {MatSortModule} from '@angular/material/sort';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [TurmaComponent, TurmaDetalheComponent],
  exports: [
    TurmaComponent
  ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        FormsModule,
        MatButtonModule,
        MatInputModule,
        MatCheckboxModule,
        MatTableModule,
        MatIconModule,
        MatNativeDateModule,
        TurmaRoutingModule,
        MatSortModule,
        ReactiveFormsModule,
        MatSnackBarModule

    ],

  providers: [
    TurmaService
  ],
})
export class TurmaModule { }
