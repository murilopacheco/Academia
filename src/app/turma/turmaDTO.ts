import {AlunoDTO} from '../aluno/alunoDTO';

export class TurmaDTO {
  public id: number;
  public nome: string;
  public atividade: string;
  public horario: string;
  public alunos: AlunoDTO[];

  constructor(id: number, nome: string, atividade: string, horario: string, alunos: AlunoDTO[]) {
    this.id = id;
    this.nome = nome;
    this.atividade = atividade;
    this.horario = horario;
    this.alunos = alunos;
  }
}
