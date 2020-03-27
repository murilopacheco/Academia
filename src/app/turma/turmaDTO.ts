import {AlunoDTO} from '../aluno/alunoDTO';

export class TurmaDTO {
  public nome: string;
  public atividade: string;
  public horario: string;
  public alunos: AlunoDTO[];

  constructor(nome: string, atividade: string, horario: string, alunos: AlunoDTO[]) {
    this.nome = nome;
    this.atividade = atividade;
    this.horario = horario;
    this.alunos = alunos;
  }
}
