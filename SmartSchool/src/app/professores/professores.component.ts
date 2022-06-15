import { Professor } from './../models/Professor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public titulo = 'Professores';
  public profSelecionado: Professor;

  public professores = [
    { id: 1 ,nome: 'Ricadin', disciplina: 'Matemática'},
    { id: 2 ,nome: 'Rovania', disciplina: 'Física'},
    { id: 3 ,nome: 'Islovenia', disciplina: 'Português'},
    { id: 4 ,nome: 'Kindin', disciplina: 'Inglês'},
    { id: 5 ,nome: 'Kuririn', disciplina: 'Programação'}
  ]

  profSelected(professor: Professor) {
    this.profSelecionado = professor;
  }

voltar() {
  this.profSelecionado = null;
}

  constructor() { }

  ngOnInit() {
  }

}
