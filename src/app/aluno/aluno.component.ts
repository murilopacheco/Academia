import { Component, OnInit } from '@angular/core';
import {AlunoDTO} from './alunoDTO';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  constructor() { }

  aluno: AlunoDTO =  {
    nome: null,
    cpf: null,
    telefone: null,
    endereco: null
  };

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    this.aluno = (f.value);
    console.log(this.aluno);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }

}
