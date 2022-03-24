import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

     data: any;
    cadastro = {
       nome : '',
       atendimento: '',
       bairro: '',
       rua: '',
       telefone: '',
       cpf:'',
       n:'',
       endereco : '',
       complemento: '',
       obs: '',
       sus: ''
    }
  constructor() { }

  ngOnInit(): void {
  }


   cadastroform(){

    console.log(this.cadastro);
     this.data = new Date();
    let div = window.document.getElementById('confirmacao')!;
    let form =  window.document.getElementById('formgeral')!;
    /* se conteúdo está escondido, mostra e troca o valor do botão para: esconde */
    if (div.style.display == 'none') {

      div.style.display = 'block'
      form.style.display = 'none'
    }

   }


   voltar(){


    let div = window.document.getElementById('confirmacao')!;
    let form =  window.document.getElementById('formgeral')!;
    /* se conteúdo está escondido, mostra e troca o valor do botão para: esconde */
    if (div.style.display == 'block') {

      div.style.display = 'none'
      form.style.display = 'block'
    }

   }
}
