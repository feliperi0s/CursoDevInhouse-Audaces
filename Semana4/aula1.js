// const/let
//exemplo 1 
// function converter(arr) {
//     const resultado = [];
//     for (let i=0; i< arr.length; i++) {
//         const valor = arr[i];
//         const novo = valor % 2 === 0 ? valor**2 : valor**3;
//         resultado.push(novo);
//     }
//     return resultado;
// }

// const entrada = [1,2,3,4,5,6,7,8,9];
// const retorno = converter(entrada);
// console.log(retorno);


//exemplo foreach
// const arr = ['sheldon', 'leonard', 'howard', 'penny'];

// function imprimirMaiuscula(nome) {
//     nome = nome.toUpperCase(); // toUpperCase de string transforma para maiúsculas
//     console.log (nome);
// }

// arr.forEach( imprimirMaiuscula );

// // não modifica array
// console.log(arr);

// //exemplo forEach 2

// function converter(arr) {
//     const resultado = [];
//     arr.forEach( function(nro) {
//         const novo = nro % 2 === 0 ? nro**2 : nro**3;
//         resultado.push(novo);
//     });
//     return resultado;
// }

// const entrada = [1,2,3,4,5,6,7,8,9];
// const retorno = converter(entrada);
// console.log(retorno);
// console.log(entrada);


const nomes = ['floki', 'bjorn', 'ubbe', 'ragnar' , 'egbert', 'lagertha', 'athelstan', 'rollo'];

// const resultado = nomes.map(function (tamanho) {
//         return tamanho.length
// });
// console.log(resultado)

const vogais = nomes.filter(function (voga) {
    return voga.startsWith("a") ||   voga.startsWith("e") ||   voga.startsWith("i") || voga.startsWith("o") || voga.startsWith("u")
})

console.log(vogais)

//https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84

//https://blog.nubank.com.br/programacao-funcional-o-que-e-relacao-nubank/