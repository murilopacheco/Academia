import {Component, OnInit, ViewChild } from '@angular/core';
import {TurmaDTO} from './turmaDTO';
import {MatTableDataSource} from '@angular/material/table';
import {ActivatedRoute, Router} from '@angular/router';
import {TurmaService} from './turma.service';
import {MatSort} from '@angular/material/sort';



@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.css']
})
export class TurmaComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private turmaService: TurmaService
              ) { }

  public isEditable =  false;

  dataSource: MatTableDataSource<TurmaDTO>;
  @ViewChild
  (MatSort, {static: true}) sort: MatSort;

  displayedColumns: string[] = ['nome', 'atividade', 'horario', 'Ações'];

  turmas: TurmaDTO[];

    ngOnInit(): void {
      this.turmaService.list().subscribe(dados => {
        this.turmas = dados;
        this.dataSource = new MatTableDataSource(this.turmas);
        this.dataSource.sort = this.sort;
      });
  }



  editar(turma: TurmaDTO) {
    // this.router.navigate(['/turmaEdit/:id'],
    //   {queryParams: turma});
    this.router.navigate(['/turmaEdit/', turma.id]);
  }
}
