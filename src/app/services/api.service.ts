import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = "https://decompmt.com.br/acoes";
  headers: any;

  constructor(private http: HttpClient) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  Cadastrar(data: any): any {
    let sus = 0;
    let rg = 0;
    let complemento = 0;
    let obs = 0;
    if (data.sus) {
      sus = data.sus;
    }
    if (data.rg) {
      rg = data.rg;
    }
    if (data.complemento) {
      complemento = data.complemento;
    }
    if (data.sus) {
      obs = data.obs;
    }
    return this.http.get(`${this.url}/${data.nome}/${data.atendimento}/${data.bairro}/${data.bairrocidadao}/${sus}/${data.cpf}/${data.telefone}/${rg}/${data.endereco}/${data.n}/${complemento}/${obs}`);
  }
}
