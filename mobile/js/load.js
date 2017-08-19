window.addEventListener("load", function () {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "../backend/public/index.php");
    var ul = document.querySelector("#list");
    
    xhr.addEventListener("load", function () {
        if (xhr.status === 200) {
            var classThemes = JSON.parse(xhr.responseText);
            classThemes.forEach(function (row) {
                var li = document.createElement("li");
                li.textContent = row.title;
                ul.appendChild(li);
            });
        }
    });
    xhr.send();
});


