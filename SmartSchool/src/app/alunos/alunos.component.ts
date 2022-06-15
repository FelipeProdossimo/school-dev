import { Aluno } from './../models/Aluno';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = 'Alunos';
  public alunoSelecionado: Aluno;
  public textSimple: string;

  public alunos = [
   { id: 1,nome: 'Julia', sobrenome: 'Louin', telefone: 22334455} ,
   { id: 2,nome: 'Camila', sobrenome: 'Notato', telefone: 22334125} ,
   { id: 3,nome: 'Rogerio', sobrenome: 'Monopapo', telefone: 223344535} ,
   { id: 4,nome: 'Cauã', sobrenome: 'Rato', telefone: 2254746455} ,
   { id: 5,nome: 'Lindomar', sobrenome: 'Cajamar', telefone: 22334512}
  ];

  alunoSelected(aluno: Aluno) {
    this.alunoSelecionado = aluno;
  }

voltar() {
  this.alunoSelecionado = null;
}

  constructor() { }

  ngOnInit(): void {
  }

}
