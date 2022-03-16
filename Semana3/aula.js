// const div = document.createElement("div");

// const div2 = document.querySelector("#caixa")

// div.innerText = "texto interno";

// div.style.backgroundColor = "blue";


// document.body.append(div)
let tamanho = 500;
function cresce() {
    tamanho = tamanho + 10;
    elementoCentral.style.height = tamanho + "px"
    elementoCentral.style.width = tamanho + "px"
}
function diminui() {
    tamanho = tamanho - 10;
    elementoCentral.style.height = tamanho + "px"
}

const elementoCentral = document.querySelector("#elementoCentral")

const btnCresce = document.querySelector("#cresce")
const btnDiminui = document.querySelector(".diminui")

btnCresce.addEventListener("click",cresce)