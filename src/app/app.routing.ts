import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {TurmaComponent} from './turma/turma.component';
import {AlunoComponent} from './aluno/aluno.component';


const APP_ROUTES: Routes = [
  {path: 'aluno', component: AlunoComponent},
  {path: 'turma', component: TurmaComponent}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
