import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { invalidEmailValidator } from 'src/app/shared/validators';
import { PessoaFisicaModel } from 'src/app/models/PessoaFisicaModel';
import { PessoaFisicaService } from 'src/app/services/pessoa-fisica/pessoa-fisica.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';




@Component({
  selector: 'app-form-pessoa-fisica',
  templateUrl: './form-pessoa-fisica.component.html',
  styleUrls: ['./form-pessoa-fisica.component.scss']
})
export class FormPessoaFisicaComponent implements OnInit {
  userForm: FormGroup;
  showResults = false;
  pessoasFisicas: PessoaFisicaModel[] = [];
  mudarBotao: boolean;
  idPessoaFisica: number;

  pessoaSelecionado: PessoaFisicaModel;

  deleteModalRef: BsModalRef;
  @ViewChild('deleteModal') deleteModal;

  constructor(
    private formBuilder: FormBuilder,
    private pessoaFisicaService: PessoaFisicaService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.prepararForm();
    this.carregar();

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
    this.pessoaFisicaService.cadastrar(this.userForm.getRawValue(), () => {
    alert('Cadastro com sucesso');
    this.onRefresh();
    });
  }

  editar(): void{
    this.pessoaFisicaService.editar(this.idPessoaFisica, this.userForm.getRawValue(), () => {
    alert('Cadastro com sucesso');
    this.onRefresh();
    });
  }

  carregar = (): void => {
    this.pessoaFisicaService.listar((response) => this.pessoasFisicas = response);
  }

  carregarCampos = (id: number): void => {
      this.idPessoaFisica = id;
      this.pessoaFisicaService.listarPorId(id, (response) => {
        this.userForm.controls.nome.setValue(response.nome);
        this.userForm.controls.idade.setValue(response.idade);
        this.userForm.controls.email.setValue(response.email);
      });
  }

  onDelete(pessoa): void{
    this.pessoaSelecionado = pessoa;
    this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});
  }

  onCorfirmDelete(){
     this.pessoaFisicaService.deletar(this.pessoaSelecionado.id, success => this.onRefresh());
  }

  onDeclineDelete(){
      this.deleteModalRef.hide();
  }

  onRefresh(){
    window.location.reload();
  }

  onEdit(pessoa){
    this.carregarCampos(pessoa.id);
    this.mudarBotao = true;
  }

}
