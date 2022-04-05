// function obterQuantidadeDaLetra(palavra, letra) {
//     //return [...palavra].filter(l => l === letra).length;
//     const arrDeLetras = [...palavra];   // [ "a", "b", "r", "a", "c", "a", "d", "a", "b", "r", "a" ]
//     const letrasSelecionadas = arrDeLetras.filter( function(l) {
//         return l === letra
//     });  // [ "a", "a", "a", "a", "a" ]
//     return letrasSelecionadas.length;
// }

// const palavra = 'abracadabra';
// const resultado = obterQuantidadeDaLetra(palavra, 'a');
// console.log(resultado); // 5

// //.................................


// function juntarDoisArrays(arr1, arr2) {
//     return [...arr1, 'separador', ...arr2];
// }

// const juntos = juntarDoisArrays([1,2,3], [6,7,8,9]);
// console.log( juntos );

// //....................................................

// const irmao = {
//     nome: 'Ronaldo',
//     idade: 30,
//     cidade: 'São Paulo'
// }

// const irmaoGemeo = { ...irmao, nome : 'Ricardo'  };

// console.log('irmaoGemeo', irmaoGemeo )

// //.................................................

// const [ primeiro, segundo, terceiro ] = ["Sushi", "Pizza", "Burger", "Lasanha"];

// console.log(primeiro);   // Sushi
// console.log(segundo);  // Pizza
// console.log(terceiro);   // Burger

// //.................................................
// const pessoa = {
//     nome: "Ozzy",
//     sobrenome: "Osbourne",
//     idade: 100,
//   };

// const { nome: primeiroNome, sobrenome: segundoNome } = pessoa;

// // console.log(nome);
// // console.log(sobrenome);

// console.log(primeiroNome); // Ozzy 
// console.log(segundoNome); // Osbourne

//...............................

function juntarPalavras(...palavras) {
    return palavras.join('-');
    
    // return palavras.reduce( (acc, atual) => acc + '-' + atual);
    
    // let resultado = null;
    // for(palavra of palavras) {
    //     if (!resultado) {
    //         resultado = palavra;
    //     } else {
    //         resultado += '-' + palavra;
    //     }
    // }
    // return resultado;
}

 const resultado = juntarPalavras('sao','paulo','futebol','clube');
 console.log(resultado);