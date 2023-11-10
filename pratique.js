  const form = document.getElementById('form-nmb');
  const numeroA = document.getElementById('nmb-a');
  const numeroB = document.getElementById('nmb-b');

form.addEventListener('submit', function(e){
  e.preventDefault();

  const mensagemSucesso = `Muito bem!!! O número <b>${numeroB.value}</b> é maior que o número <b>${numeroA.value}</b>`;
  const mensagemFracasso = `Que pena!!! O número <b>${numeroA.value}</b> é maior que o número <b>${numeroB.value}</b>`;
  const mensagemIgualdade = 'Espertinho!!! Os números são iguais';

  if (numeroB.value > numeroA.value){
    const containerMensagemSucesso = document.querySelector('.success-message');
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = 'block';
  }
  else if(numeroA.value == numeroB.value ){
    const containerMensagemIgualdade = document.querySelector('.igualdade-message');
    containerMensagemIgualdade.innerHTML = mensagemIgualdade;
    containerMensagemIgualdade.style.display = 'block';
  }
  else{
    const containerMensagemFracasso = document.querySelector('.error-message');
    containerMensagemFracasso.innerHTML = mensagemFracasso;
    containerMensagemFracasso.style.display = 'block';
  }
})

function limpaTela(){
  document.querySelector('.igualdade-message').style.display = 'none';
  document.querySelector('.error-message').style.display = 'none';
  document.querySelector('.success-message').style.display = 'none';
}