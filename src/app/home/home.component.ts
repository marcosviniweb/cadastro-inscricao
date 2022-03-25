import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  id: any;
  data: any;
  cadastro = {
    nome: '',
    atendimento: '',
    bairro: '',
    telefone: '',
    cpf: '',
    rg: '',
    bairrocidadao: '',
    n: '',
    endereco: '',
    complemento: '',
    obs: '',
    sus: ''
  }
  constructor(private Api: ApiService) { }

  ngOnInit(): void {
  }


  cadastroform() {
    this.Api.Cadastrar(this.cadastro).subscribe((res: any) => {
      console.log(res);
      if (res.status == 200) {
        this.data = new Date();
        let div = window.document.getElementById('confirmacao')!;
        let form = window.document.getElementById('formgeral')!;
        /* se conteúdo está escondido, mostra e troca o valor do botão para: esconde */
        if (div.style.display == 'none') {
          div.style.display = 'block'
          form.style.display = 'none'
        }
      }
    });



  }


  voltar() {

    this.cadastro.nome = '';
    this.cadastro.atendimento = '';
    this.cadastro.bairro = '';
    this.cadastro.telefone = '';
    this.cadastro.n = '';
    this.cadastro.cpf = '';
    this.cadastro.rg = '';
    this.cadastro.complemento = '';
    this.cadastro.sus = '';
    this.cadastro.obs = '';
    this.cadastro.endereco = '';
    this.cadastro.bairrocidadao = '';


    let div = window.document.getElementById('confirmacao')!;
    let form = window.document.getElementById('formgeral')!;
    /* se conteúdo está escondido, mostra e troca o valor do botão para: esconde */
    if (div.style.display == 'block') {

      div.style.display = 'none'
      form.style.display = 'block'
    }

  }
}
