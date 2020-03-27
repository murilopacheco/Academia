import { Component, OnInit } from '@angular/core';
import {AlunoDTO} from './alunoDTO';
import {NgForm} from '@angular/forms';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter , MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';


@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css'],
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},

    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class AlunoComponent implements OnInit {

  constructor() { }

  aluno: AlunoDTO =  {
    nome: null,
    cpf: null,
    telefone: null,
    endereco: null,
    dataNascimento: null
  };

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    this.aluno = (f.value);
    console.log(this.aluno);  // { first: '', last: '' }
    console.log(f.valid);  // false
    console.log(f.value);
  }

}
