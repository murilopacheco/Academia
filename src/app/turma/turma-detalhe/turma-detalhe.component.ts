import {Component, Input, OnInit, Output} from '@angular/core';
import {TurmaDTO} from '../turmaDTO';
import {AlunoDTO} from '../../aluno/alunoDTO';
import {NgForm} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';
import {TurmaService} from '../turma.service';
import {isEmpty} from 'rxjs/operators';


@Component({
  selector: 'app-turma-detalhe',
  templateUrl: './turma-detalhe.component.html',
  styleUrls: ['./turma-detalhe.component.css']
})
export class TurmaDetalheComponent implements OnInit {


  constructor( private route: ActivatedRoute,
               private  turmaService: TurmaService) {
    // this.buscarAlunosTurma(this.id);
  }

  public turma: TurmaDTO = null;
  public alunos: AlunoDTO[] = [];

  inscricao: Subscription;

  displayedColumns: string[] = ['Selecione', 'Nome', 'CPF', 'Telefone', 'Endereço', 'Nascimento'];
  dataSource: MatTableDataSource<AlunoDTO>;
  selection = new SelectionModel<AlunoDTO>(true, []);

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: Params) => {
        const id: number = +params.id;
        if (id) {
          this.turma = this.turmaService.getTurmaByID(id);
          this.alunos = this.turmaService.getAlunosByTurma(this.turma.id);
          this.dataSource = new MatTableDataSource<AlunoDTO>(this.turma.alunos);
        } else {
          this.turma = {
            id: null, nome: '', atividade: '', horario: '',
            alunos: [],
          };
          this.dataSource = new MatTableDataSource<AlunoDTO>([]);
        }
      });
  }



  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }



  onSubmit(f: NgForm) {
    this.turma = (f.value);
    console.log(this.turma);  // { first: '', last: '' }
    console.log(f.valid);  // false
    console.log(f.value);
  }

  /** Se o número de elementos selecionados corresponde ao número total de linhas. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Seleciona todas as linhas se elas não estiverem todas selecionadas; caso contrário, seleção clara. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** O rótulo da caixa de seleção na linha passada */
  checkboxLabel(row?: AlunoDTO): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.cpf + 1}`;
  }

  remover() {
    console.log(this.selection.selected);
    console.log(this.turma.alunos);
    const valuesToRemove = this.selection.selected;

    const filteredItems = this.turma.alunos.filter(item => !valuesToRemove.includes(item));
    console.log(filteredItems);
    this.dataSource = new MatTableDataSource<AlunoDTO>(filteredItems);
  }
}
