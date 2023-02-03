var imgs = ["imagens/phone-slide-1.png", "imagens/phone-slide-2.png", "imagens/phone-slide-3.png", "imagens/phone-slide-4.png"]
var imagem = document.getElementById("phone-img");
var cont = 0;

imagem.innerHTML = "<img  src='"+imgs[cont]+"'/>"
const myTimeout = setTimeout(Imagem, 5000);
function Imagem(){
    cont++;
    if(cont>3){
        cont=0;
    }
    imagem.innerHTML = "<img  src='"+imgs[cont]+"'/>"
    const myTimeout = setTimeout(Imagem, 5000);
    
}