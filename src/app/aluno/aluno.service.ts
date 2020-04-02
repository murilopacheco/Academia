import { Injectable } from '@angular/core';
import {AlunoDTO} from './alunoDTO';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  public alunos: AlunoDTO[] = [{
    nome: 'Murilo',
    cpf: '111.111.111-11',
    telefone: '(62) 3222-2222',
    endereco: 'Rua 1 Centro',
    dataNascimento: null
  },
    {
      nome: 'Aluno2',
      cpf: '222.222.222-22',
      telefone: '(62) 3222-2222',
      endereco: 'Rua 1 Centro',
      dataNascimento: null
    },
    {
      nome: 'Aluno3',
      cpf: '333.333.333-33',
      telefone: '(62) 3222-2222',
      endereco: 'Rua 1 Centro',
      dataNascimento: null
    }
  ];

  constructor() { }

  getAlunos(): AlunoDTO[] {
    return this.alunos;
  }
}
