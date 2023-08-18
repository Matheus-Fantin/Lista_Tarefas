$('form').on('submit', function(e){
    e.preventDefault();

    const novaTarefa = $('#nova-tarefa').val();

    $(`<li >${novaTarefa}</li>`).appendTo('ul');
    $('#nova-tarefa').val('');
    
    $('li').click(function() {
        $(this).addClass('novoItem');
    });
})  
