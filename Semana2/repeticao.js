// // var positivos = 0;
// // var negativos = 0;
// // var zeros = 0;

// // var numero = [5,7,-4,-5,0,9,-9,0];

// // for(var i=0 ; i<numero.length ; i++ ) {
// //     var nro = numero[i]
// //     if (nro ===0) {
// //         zeros++;
// //     } else if (nro > 0 ){
// //         positivos++;

// //     } else {
// //         negativos++;
// //     }

// // }

// // console.log('positivos', positivos)
// // console.log('negativos', negativos)
// // console.log('zeros', zeros)

// var valor = 1200;
// var anos = 0;

// while(valor < 5000 ) {

//     var perc = valor * 0.10;
//     valor += perc;
//     anos++;

// }

// console.log(anos + ' anos')

// for (var i = 0; i < 34; i++) {

//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }

// }

var arr = [0, 1, 0, 1, 0, 1];

for (var i=0; i< arr.length; i++){
    var interruptor = (arr[i] === 0)? 'Desligado' : 'Ligado';
    console.log(arr[i] + '-' + interruptor);
}
