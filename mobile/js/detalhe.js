function detalhe(id) {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "../backend/public/index.php/detalhe/" + id);
    xhr.addEventListener("load", function () {
        var row = JSON.parse(xhr.responseText);
        montarTag('titulo', row.title);
        montarTag('descricao', row.description);
        montarTag('data', row.start);
        montarTag('hora', row.start);
        montarTag('local', row.address.street);
        montarTag('preco', row.price);
        montarTag('categoria', row.category);
        montarTag('consultor', row.consultant.name);

        $('#paginaUm').css('display', 'none');
        $('#paginaDois').css('display', 'block');

    });
    xhr.send();
}

function montarTag(classe, texto) {
    var tag = document.querySelector('#detalhe .' + classe + ' span');
    tag.textContent = texto;
}

var goBack = document.querySelector('#paginaDois .goBack');

goBack.addEventListener('click', function () {
    montarTag('titulo', '');
        montarTag('descricao', '');
        montarTag('data', '');
        montarTag('hora', '');
        montarTag('local', '');
        montarTag('preco', '');
        montarTag('categoria', '');
        montarTag('consultor', '');
    $('#paginaUm').css('display', 'block');
    $('#paginaDois').css('display', 'none');
});

