import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoComponent } from './aluno.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'; // <-- NgModel lives here




@NgModule({
  declarations: [AlunoComponent],
  exports: [
    AlunoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
  ]
})
export class AlunoModule { }
