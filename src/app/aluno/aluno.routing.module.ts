import {RouterModule, Routes} from '@angular/router';
import {AlunoComponent} from './aluno.component';
import {NgModule} from '@angular/core';
import {AlunoDetalheComponent} from './aluno-detalhe/aluno-detalhe.component';
import {AuthGuard} from '../auth/auth.guard';


const alunoRouts: Routes = [
  {path: 'aluno', component: AlunoComponent, canActivate: [AuthGuard]},
  {path: 'alunoDetalhe', component: AlunoDetalheComponent, canActivate: [AuthGuard]},
  {path: 'alunoEdit/:id', component: AlunoDetalheComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(alunoRouts)],
  exports: [RouterModule]
})
export class AlunoRoutingModule {

}
