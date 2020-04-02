import { Injectable } from '@angular/core';
import {TurmaDTO} from './turmaDTO';
import {AlunoDTO} from '../aluno/alunoDTO';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  constructor() { }

  public turmas: TurmaDTO[] = [
    {
      id: 1, nome: 'Turma1', atividade: 'musculação', horario: '20:00 - 21:00',
      alunos: [
        {
          nome: 'murilo',
          cpf: '000.000.000-00',
          telefone: '(62) 984447430',
          endereco: 'Rua teste centro',
          dataNascimento: new Date()
        },
        {
          nome: 'aluno1',
          cpf: '111.111.111-11',
          telefone: '(62) 3222-2222',
          endereco: 'Rua 1 n 1000 setor bairro',
          dataNascimento: new Date()
        },
        {
          nome: 'Aluno2',
          cpf: '222.222.222-22',
          telefone: '(62)3333-3333',
          endereco: 'Rua 3 casa2 bairro periferia',
          dataNascimento: new Date()
        }
      ]
    },
    {
      id: 2, nome: 'Turma2', atividade: 'Natação', horario: '17:00 - 18:00',
      alunos: [
        {
          nome: 'aluno1',
          cpf: '111.111.111-11',
          telefone: '(62) 3222-2222',
          endereco: 'Rua 1 n 1000 setor bairro',
          dataNascimento: new Date()
        },
        {
          nome: 'Aluno2',
          cpf: '222.222.222-22',
          telefone: '(62)3333-3333',
          endereco: 'Rua 3 casa2 bairro periferia',
          dataNascimento: new Date()
        }
      ]
    },
    {
      id: 3, nome: 'Turma3', atividade: 'Luta', horario: '19:00 - 20:00',
      alunos: [
        {
          nome: 'murilo',
          cpf: '000.000.000-00',
          telefone: '(62) 984447430',
          endereco: 'Rua teste centro',
          dataNascimento: new Date()
        },
        {
          nome: 'aluno1',
          cpf: '111.111.111-11',
          telefone: '(62) 3222-2222',
          endereco: 'Rua 1 n 1000 setor bairro',
          dataNascimento: new Date()
        },
      ]
    }
  ];

  getTurmas(): TurmaDTO[] {
    return (this.turmas);
  }

  getAlunosByTurma(id: number): AlunoDTO[] {
    let turma: TurmaDTO;
    let alunos: AlunoDTO[];
    for (let i = 0; i < this.turmas.length; i++) {
      turma = this.turmas[i];
      if (id == turma.id) {
        alunos = turma.alunos;
      }
    }
    return  alunos;
  }

  getTurmaByID(id: number): TurmaDTO {
    let turma: TurmaDTO;
    for (let i = 0; i < this.turmas.length; i++ ){
      turma = this.turmas[i];
      if (id === turma.id){
        return turma;
      }
    }
  }

}
