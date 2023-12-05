$(document).ready(function () {
  $('form').on('submit', function(e){

    e.preventDefault();
    const tarefa = $('form input').val();
    const novaTarefa =  $('li');          //$('<li></li>'); // Prblema pode estar aqui!!!!!!
    
    $(`
    <div class="lista">
    <a>
      ${tarefa}
    </a>
    </div>
    `).appendTo(novaTarefa);
    $(tarefa).appendTo(novaTarefa);
    $(novaTarefa).appendTo('ul');
    $(novaTarefa).fadeIn(1000);
    $('#tarefa-nova').val(' ');
  })
  
  $(novaTarefa).click(function(a) {
  
    a.preventDefault();
    $(this).addClass('clicked');
  })
})