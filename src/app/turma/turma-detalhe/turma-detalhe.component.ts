import {Component, OnInit, AfterViewInit, AfterContentChecked, ViewChild} from '@angular/core';
import {TurmaDTO} from '../turmaDTO';
import {AlunoDTO} from '../../aluno/alunoDTO';
import {NgForm} from '@angular/forms';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {TurmaService} from '../turma.service';
import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-turma-detalhe',
  templateUrl: './turma-detalhe.component.html',
  styleUrls: ['./turma-detalhe.component.css']
})
export class TurmaDetalheComponent implements OnInit, AfterViewInit, AfterContentChecked {


  constructor( private route: ActivatedRoute,
               private  turmaService: TurmaService,
               private router: Router) {
  }

  public turma: TurmaDTO;

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<any>;

  inscricao: Subscription;

  displayedColumns: string[] = ['Selecione', 'Nome', 'CPF', 'Telefone', 'Endereço', 'Nascimento'];
  dataSource: MatTableDataSource<AlunoDTO>;
  selection = new SelectionModel<AlunoDTO>(true, []);

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: Params) => {
        const id: number = +params.id;
        if (id) {
          this.turmaService.getTurmaByID(id).subscribe(dados => {
            this.turma = dados;
          }, error => {console.error(error); });
        } else {
          this.turma = {
            id: null, nome: '', atividade: '', horario: '',
            alunos: [],
          };
          this.dataSource = new MatTableDataSource<AlunoDTO>([]);
        }
      });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.table.dataSource = this.dataSource;
  }

  ngAfterContentChecked() {
    this.dataSource = new MatTableDataSource(this.turma.alunos);
  }



  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }



  onSubmit(f: NgForm) {
    this.turma = (f.value);
    if (this.turma.id === null) {
      this.turmaService.save(this.turma);
    } else {
      this.turmaService.update(this.turma);
    }
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
    const valuesToRemove = this.selection.selected;

    const filteredItems = this.turma.alunos.filter(item => !valuesToRemove.includes(item));
    console.log(filteredItems);
    this.dataSource = new MatTableDataSource<AlunoDTO>(filteredItems);
  }

  delete(turma: TurmaDTO, f: NgForm) {
    this.turmaService.delete(turma);
   // this.router.navigate(['/turma/']);
   //  f.setValue("");
    f.form.reset();
  }



}
