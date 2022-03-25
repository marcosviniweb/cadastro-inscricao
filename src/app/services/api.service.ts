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
    return this.http.get(`${this.url}/${data.nome}/${data.atendimento}/${data.bairro}/${data.bairrocidadao}/${data.sus}/${data.cpf}/${data.telefone}/${data.rg}/${data.endereco}/${data.n}/${data.complemento}/${data.obs}`);
  }
}
