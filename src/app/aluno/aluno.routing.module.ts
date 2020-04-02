import {RouterModule, Routes} from '@angular/router';
import {AlunoComponent} from './aluno.component';
import {NgModule} from '@angular/core';
import {AlunoDetalheComponent} from './aluno-detalhe/aluno-detalhe.component';


const alunoRouts: Routes = [
  {path: 'aluno', component: AlunoComponent},
  {path: 'alunoDetalhe', component: AlunoDetalheComponent},
];

@NgModule({
  imports: [RouterModule.forChild(alunoRouts)],
  exports: [RouterModule]
})
export class AlunoRoutingModule {

}
