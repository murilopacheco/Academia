import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TurmaComponent} from './turma.component';
import {TurmaDetalheComponent} from './turma-detalhe/turma-detalhe.component';
import {AlunoComponent} from '../aluno/aluno.component';
import {AuthGuard} from '../auth/auth.guard';

const turmaRouts: Routes = [
  {path: 'turma', component: TurmaComponent, canActivate: [AuthGuard]},
  {path: 'turmaDetalhe', component: TurmaDetalheComponent, canActivate: [AuthGuard]},
  {path: 'turmaEdit/:id', component: TurmaDetalheComponent, canActivate: [AuthGuard]}
];


@NgModule({
  imports: [RouterModule.forChild(turmaRouts)],
  exports: [RouterModule]
})
export class TurmaRoutingModule {

}
