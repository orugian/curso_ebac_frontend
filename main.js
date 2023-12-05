$(document).ready(function () {
  $('form').on('submit', function(e){

    e.preventDefault();
    const tarefa = $('form input').val();
    const novaTarefa =  $('<li></li>');          //$('<li></li>'); // Prblema pode estar aqui!!!!!!
    $(tarefa).appendTo(novaTarefa);
    $(`
    <div class="tarefa">
    <a>
      ${tarefa}
    </a>
    </div>
    `).appendTo(novaTarefa);
    $(novaTarefa).appendTo('ul');
    $(novaTarefa).fadeIn(1000);
    $('#tarefa-nova').val(' ');
  })
  
  $(novaTarefa.val()).click(function(a) {
    // Adiciona a classe "clicked" ao link
    a.preventDefault();
    $(this).addClass('clicked');
  })
})