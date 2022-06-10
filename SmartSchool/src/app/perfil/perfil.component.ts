import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  titulo = 'Perfil'

  public Perfils = [
    { nome: 'Festa Junina'},
    { nome: 'Festa Junin'},
    { nome: 'Festa Juni'},
    { nome: 'Festa Jun'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
