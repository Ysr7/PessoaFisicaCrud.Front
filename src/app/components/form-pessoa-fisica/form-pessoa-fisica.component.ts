import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { invalidEmailValidator } from 'src/app/shared/validators';
import { PessoaFisicaModel } from 'src/app/models/PessoaFisicaModel';
import { PessoaFisicaService } from 'src/app/services/pessoa-fisica/pessoa-fisica.service';



@Component({
  selector: 'app-form-pessoa-fisica',
  templateUrl: './form-pessoa-fisica.component.html',
  styleUrls: ['./form-pessoa-fisica.component.scss']
})
export class FormPessoaFisicaComponent implements OnInit {
  userForm: FormGroup;
  showResults = false;

  constructor(
    private formBuilder: FormBuilder,
    private pessoaFisica: PessoaFisicaService
  ) { }

  ngOnInit(): void {
    this.prepararForm();
 }

  prepararForm(): void {
    this.userForm = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required]],
      email: [null, [invalidEmailValidator(), Validators.required]],
      idade: [null, [Validators.min(0), Validators.max(90)]],
   });
  }

  cadastrar(): void{

    this.pessoaFisica.cadastrar(this.userForm.getRawValue(), () => {
    alert('Cadastro com sucesso');
    });
  }
}