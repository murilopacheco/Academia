import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const appRouts: Routes = [
  // {path: 'aluno', component: AlunoComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(appRouts)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
