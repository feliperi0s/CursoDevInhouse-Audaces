

let buton = document.querySelector("button")
buton.addEventListener("click",carregar)


function carregar(){

var msg = window.document.getElementById('msg')
var foto = window.document.getElementById('imagem')
var data = document.getElementById('time').value
const data2 = data.split(":")[0]
var hora = data2

msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora <12){
    // Bom dia!
    foto.src = 'manhã.png'
    document.body.style.background = '#182f37'
}else if (hora >=12 && hora <18){
    //Boa tarde
foto.src = 'tarde.png'
document.body.style.background = '#553528'
}else{
    //boa noite
    foto.src = 'noite.png'
    document.body.style.background = '#111112'
}
}
