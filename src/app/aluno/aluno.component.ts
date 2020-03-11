import { Component, OnInit } from '@angular/core';
import {AlunoDTO} from './alunoDTO';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  constructor() { }
  aluno: AlunoDTO;

  ngOnInit(): void {}

}
