function detalhe(id) {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "../backend/public/index.php/detalhe/" + id);
    xhr.addEventListener("load", function () {
        var row = JSON.parse(xhr.responseText);
        montarTag('#detalhe .titulo span', row.title);
        montarTag('#paginaDois .topo .titulo', row.title);
        montarTag('#detalhe .descricao span', row.description);
        var dataHora = row.start.split(' ');
        montarTag('#detalhe .data span', dataHora[0]);
        montarTag('#detalhe .hora span', dataHora[1]);
        var endereco = row.address.street + " " + row.address.number + ", " + row.address.neighborhood + " " + row.address.city;
        montarTag('#detalhe .local span', endereco);
        montarTag('#detalhe .preco span', "R$ " + row.price);
        montarTag('#detalhe .categoria span', row.category);
        montarTag('#detalhe .consultor span', row.consultant.name);

        $('#paginaUm').css('display', 'none');
        $('#paginaDois').css('display', 'block');

    });
    xhr.send();
}

function montarTag(classe, texto) {
    var tag = document.querySelector(classe);
    tag.textContent = texto;
}

var goBack = document.querySelector('#paginaDois .goBack');

goBack.addEventListener('click', function () {
    montarTag('#detalhe .titulo span', '');
    montarTag('#paginaDois .topo .titulo', '');
    montarTag('#detalhe .descricao span', '');
    montarTag('#detalhe .data span', '');
    montarTag('#detalhe .hora span', '');
    montarTag('#detalhe .local span', '');
    montarTag('#detalhe .preco span', '');
    montarTag('#detalhe .categoria span', '');
    montarTag('#detalhe .consultor span', '');
    $('#paginaUm').css('display', 'block');
    $('#paginaDois').css('display', 'none');
});

