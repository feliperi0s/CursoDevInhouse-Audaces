// const/let

function converter(arr) {
    const resultado = [];
    for (let i=0; i< arr.length; i++) {
        const valor = arr[i];
        const novo = valor % 2 === 0 ? valor**2 : valor**3;
        resultado.push(novo);
    }
    return resultado;
}

const entrada = [1,2,3,4,5,6,7,8,9];
const retorno = converter(entrada);
console.log(retorno);