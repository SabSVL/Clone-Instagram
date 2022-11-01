document.addEventListener('DOMContentLoaded', function () {
    var imgs = ["imagem/phone-slide-1.png", "imagem/phone-slide-2.png", "imagem/phone-slide-3.png", "imagem/phone-slide-4.png"]
    var imagem = document.getElementById("aqui");
    var cont = 0;
    
    imagem.innerHTML = "<img id='bak' src='"+imgs[cont]+"'/>"
    const myTimeout = setTimeout(Imagem, 5000);
    function Imagem(){
        cont++;
        if(cont>3){
            cont=0;
        }
        imagem.innerHTML = "<img id='bak' src='"+imgs[cont]+"'/>"
        const myTimeout = setTimeout(Imagem, 5000);
        
    }

});