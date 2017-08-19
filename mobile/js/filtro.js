var search = document.querySelector("#search");

search.addEventListener('input',function(){
    console.log('test');
    var blocos = document.querySelectorAll(".square");
    
    if (this.value.length > 0) {
        for (var i = 0; i < blocos.length; i++) {
            var bloco = blocos[i];
            var titulo = bloco.querySelector('.titulo');
            titulo = titulo.textContent;
            
            var expressao = new RegExp(this.value, "i"); 
            
            if (!expressao.test(titulo)) {
                bloco.classList.add("invisivel");
            } else {
                bloco.classList.remove("invisivel");
            }
        }
    }else {
        for (var i = 0; i < blocos.length; i++) {
            var bloco = blocos[i];
            bloco.classList.remove("invisivel");
        }
    }
});