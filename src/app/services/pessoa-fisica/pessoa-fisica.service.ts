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

  // cadastrar = (pessoaFisica: PessoaFisicaModel, success: (result: any) => void): void => {
  //   this.http.post(`http://localhost:5010/PessoasFisicas/`, pessoaFisica).subscribe((result) => success(result));
  // }

  cadastrar = (pessoaFisica: PessoaFisicaModel, success: (result: any) => void): void => {
    this.post(`http://localhost:5010/pessoasFisicas`, pessoaFisica, success);
  }

  listar = (id: number, success: (result: any) => void): void => {
    this.get(`http://localhost:5010/pessoasFisicas/${id}`, success)
  }

}
