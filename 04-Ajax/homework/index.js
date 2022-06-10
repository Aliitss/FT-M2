
$('#loading').hide();
$('#boton').click(function() {
    $.get('http://localhost:5000/amigos', function(data) {
    let lista = $('#lista');
    lista.empty();
    for (let amigo of data) {
        const li = document.createElement('li');
        li.innerText = amigo.name;
        lista.append(li);
    }    
    //console.log(data);
}); 
});

$('#search').click(function() {
    const id = $('#input').val();
    $('#input').val('');

    $.get('http://localhost:5000/amigos/' + id, function(amigo) {
        $('#amigo').text(amigo.name);
    });
});

$('#delete').click(function() {
    const id = $('#inputDelete').val();
    $('#inputDelete').val('');

    $.ajax({url: 'http://localhost:5000/amigos/' + id, 
        type: 'DELETE',
        success: function(amigo) {
        $('#success').text(`se eliminó correctamente al amigo con el id ${id}`);
    }});
});