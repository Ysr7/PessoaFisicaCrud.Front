import { Injectable } from '@angular/core';
import { PessoaFisicaModel } from 'src/app/models/PessoaFisicaModel';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BaseHttp } from 'src/app/shared/services/base-http';

@Injectable({
  providedIn: 'root'
})
export class PessoaFisicaService extends BaseHttp  {

  constructor(
    public http: HttpClient
    ) {
      super(http);
    }

  cadastrar = (pessoaFisica: PessoaFisicaModel, success: (result: any) => void): void => {
    this.post(`http://localhost:5010/pessoasFisicas`, pessoaFisica, success);
  }

  editar = (id: number, pessoaFisica: PessoaFisicaModel, success: (result: any) => void): void => {
    this.put(`http://localhost:5010/pessoasFisicas/${id}`, pessoaFisica, success);
  }


  listarPorId = (id: number, success: (result: any) => void): void => {
    this.get(`http://localhost:5010/pessoasFisicas/${id}`, success);
  }

  listar = (success: (result: any) => void): void => {
    this.get(`http://localhost:5010/pessoasFisicas`, success);
  }

  deletar = (id: number, success: (result: any) => void): void => {
    this.delete(`http://localhost:5010/pessoasFisicas/${id}`, success);
  }

}
