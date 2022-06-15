import { Aluno } from './../models/Aluno';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css'],
})
export class AlunosComponent implements OnInit {
  public alunoForm: FormGroup;
  public titulo = 'Alunos';
  public alunoSelecionado: Aluno;
  public textSimple: string;

  public alunos = [
    { id: 1, nome: 'Julia', sobrenome: 'Louin', telefone: 22334455 },
    { id: 2, nome: 'Camila', sobrenome: 'Notato', telefone: 22334125 },
    { id: 3, nome: 'Rogerio', sobrenome: 'Monopapo', telefone: 223344535 },
    { id: 4, nome: 'Cauã', sobrenome: 'Rato', telefone: 2254746455 },
    { id: 5, nome: 'Lindomar', sobrenome: 'Cajamar', telefone: 22334512 },
  ];

  constructor(private fb: FormBuilder) {
    this.criarForm();
  }

  ngOnInit(): void {}

  criarForm() {
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required],
    });
  }

  alunoSubmit() {
    console.log(this.alunoForm.value);
  }

  alunoSelected(aluno: Aluno) {
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar() {
    this.alunoSelecionado = null;
  }
}
