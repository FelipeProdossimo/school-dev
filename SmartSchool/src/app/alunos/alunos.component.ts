import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  titulo = 'Alunos';

  public alunos = [
   { nome: 'Julia'} ,
   { nome: 'Camila'} ,
   { nome: 'Rogerio'} ,
   { nome: 'Cauã'} ,
   { nome: 'Lindomar'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
