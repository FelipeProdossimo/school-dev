import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = 'Professores'

  public professores = [
    { nome: 'Ricadin'},
    { nome: 'Rovania'},
    { nome: 'Islovenia'},
    { nome: 'Kindin'},
    { nome: 'Kuririn'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
