import {Component, OnInit, AfterViewInit, AfterContentChecked, ViewChild, ChangeDetectorRef} from '@angular/core';
import {TurmaDTO} from '../turmaDTO';
import {AlunoDTO} from '../../aluno/alunoDTO';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {empty, Subscription} from 'rxjs';
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
               private router: Router,
               private fb: FormBuilder,
               private changeDetectorRefs: ChangeDetectorRef) {
  }
  formTurma: FormGroup;
  public turma: TurmaDTO;
  public salvo: boolean;

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<any>;

  inscricao: Subscription;

  displayedColumns: string[] = ['Selecione', 'Nome', 'CPF', 'Telefone', 'Endereço', 'Nascimento'];
  dataSource: MatTableDataSource<AlunoDTO>;
  selection = new SelectionModel<AlunoDTO>(true, []);

  ngOnInit() {
    this.salvo = false;
    this.inscricao = this.route.params.subscribe(
      (params: Params) => {
        const id: number = +params.id;
        if (id) {
          this.turmaService.getTurmaByID(id).subscribe(dados => {
            this.turma = dados;
            this.formTurma = this.fb.group({
              id: [this.turma.id],
              nome: [this.turma.nome, Validators.required],
              atividade: [this.turma.atividade],
              horario: [this.turma.horario]
            });
          }, error => {console.error(error); });
        } else {
          this.turma = {
            id: null, nome: '', atividade: '', horario: '',
            alunos: [],
          };
          this.dataSource = new MatTableDataSource<AlunoDTO>([]);
          this.formTurma = this.fb.group({
            id: [this.turma.id],
            nome: [this.turma.nome, Validators.required],
            atividade: [this.turma.atividade],
            horario: [this.turma.horario]
          });
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



  onSubmit() {
    this.turma = (this.formTurma.value);
    if (this.turma.id === null) {
      this.turmaService.save(this.turma).subscribe(() => {
        this.turmaService.showMessage('Turma salva com sucesso!', false);
        this.router.navigate(['/turma']);
      });
    } else {
      this.turmaService.update(this.turma).subscribe(() => {
        this.turmaService.showMessage('Turma atualizada com sucesso!', false);
        this.router.navigate(['/turma']);
      });
    }
  }

  // onSubmit() {
  //   this.turma = (this.formTurma.value);
  //   if (this.turma.id === null) {
  //     this.turmaService.save(this.turma);
  //     this.salvo = true;
  //   } else {
  //     this.turmaService.update(this.turma);
  //   }
  // }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: AlunoDTO): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
  remover() {
    const valuesToRemove = this.selection.selected;

    const filteredItems = this.turma.alunos.filter(item => !valuesToRemove.includes(item));
    this.dataSource = new MatTableDataSource<AlunoDTO>(filteredItems);
    this.selection =  new SelectionModel<AlunoDTO>(true, []);
    this.changeDetectorRefs.detectChanges();
    this.table.renderRows();
  }

  delete(turma: TurmaDTO) {
    this.turmaService.delete(turma).subscribe(() => {
      this.turmaService.showMessage('Turma deletada com sucesso!', false);
      this.router.navigate(['/turma']);
    });
  }

  isFieldInvalid(field: string) { // {6}
    return (
      (!this.formTurma.get(field).valid && this.formTurma.get(field).touched) ||
      (this.formTurma.get(field).untouched && this.formTurma) || (this.formTurma.get(field).errors)
    );
  }
}
