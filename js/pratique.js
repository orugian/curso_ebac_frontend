$(document).ready(function(){

$('#number').mask('(00) 00000-0000');
$('#cpf').mask('000.000.000-00');
$('#cep').mask('00000-000');

$('form').validate({
  rules:{
    nome: {
      required: true,
      minlength: 2
    },
    email: {
      required: true,
      email: true,
    },
    number:{
      required: true,
    },
    cpf:{
      required: true,
      minlength: 11,
    },
    endereco: {
      required: true,
      minlength: 3,
    },
    cep: {
      required: true,
      minlength: 9,
    }, 
  },
    messages:{
      nome:{
        required: 'Este campo deve ser preenchido',
        minlength: 'Insira seu nome completo',
      },
      email: {
        required: 'Este campo deve ser preenchido',
        email: 'Insira um e-mail válido',
      },
      number:{
        required: 'Este campo deve ser preenchido',
      },
      cpf: {
        required: 'Este campo deve ser preenchido',
        minlength: 'Insira um CPF válido',
      },
      endereco: {
        required: 'Este campo deve ser preenchido',
        minlength: 'Insira o endereço completo',
      },
      cep: {
        required: 'Este campo deve ser preenchido',
        minlength: 'Insira um CEP válido',
      }, 
    }
  })
})