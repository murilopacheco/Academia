import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TurmaComponent} from './turma.component';
import {TurmaDetalheComponent} from './turma-detalhe/turma-detalhe.component';

const turmaRouts: Routes = [
  {path: 'turma', component: TurmaComponent},
  {path: 'turmaDetalhe', component: TurmaDetalheComponent},
  {path: 'turmaEdit/:id', component: TurmaDetalheComponent}
];


@NgModule({
  imports: [RouterModule.forChild(turmaRouts)],
  exports: [RouterModule]
})
export class TurmaRoutingModule {

}
