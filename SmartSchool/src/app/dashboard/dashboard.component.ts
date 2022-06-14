import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public titulo = 'Principal'

  public Dashboards = [
    { nome: 'Jubileu '},
    { nome: 'Tadeu '},
    { nome: 'Orlando'},
    { nome: 'Xuxa'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
