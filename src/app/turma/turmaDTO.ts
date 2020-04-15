import {AlunoDTO} from '../aluno/alunoDTO';

export interface TurmaDTO {
   id: number;
   nome: string;
   atividade: string;
   horario: string;
   alunos: AlunoDTO[];
}
