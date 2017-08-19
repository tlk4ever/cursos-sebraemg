window.addEventListener("load", function () {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "../backend/public/index.php");
    var div = document.querySelector("#meio .row");

    xhr.addEventListener("load", function () {
        if (xhr.status === 200) {
            var classThemes = JSON.parse(xhr.responseText);
            classThemes.forEach(function (row) {
                var square = montarQuadadro();
                var bloco = montarBloco();

                var titulo = montarTitulo(row.title);

                var categoria = montarCategoria(row.category);

                var cidade = montarCidade(row.address.city);

                var data = montarData(row.start);

                bloco.appendChild(categoria);
                bloco.appendChild(titulo);
                bloco.appendChild(cidade);
                bloco.appendChild(data);
                square.appendChild(bloco);
                div.appendChild(square);
            });
        }
    });
    xhr.send();
});

function montarData(text) {
    var data = document.createElement("p");
    data.classList.add('data');
    data.textContent = text;
    var icon = iconData();
    data.appendChild(icon);
    return data;
}

function iconData() {
    var icon = document.createElement("i");
    icon.classList.add('right');
    icon.classList.add('small');
    icon.classList.add('material-icons');
    icon.textContent = 'event';
    return icon;
}

function montarTitulo(text) {
    var titulo = document.createElement("p");
    titulo.classList.add('titulo');
    titulo.textContent = text;
    return titulo;
}

function montarCategoria(text) {
    var titulo = document.createElement("p");
    titulo.classList.add('categoria');
    titulo.textContent = text;
    return titulo;
}
function montarCidade(text) {
    var titulo = document.createElement("p");
    titulo.classList.add('cidade');
    titulo.textContent = text;
    return titulo;
}

function montarQuadadro() {
    var bloco = document.createElement("div");
    bloco.classList.add('col');
    bloco.classList.add('s12');
    bloco.classList.add('m6');
    bloco.classList.add('l4');
    bloco.classList.add('xl4');
    bloco.classList.add('square');
    return bloco;
}

function montarBloco() {
    var bloco = document.createElement("div");
    bloco.classList.add('bloco');

    bloco.classList.add('z-depth-1');
    return bloco;
}

