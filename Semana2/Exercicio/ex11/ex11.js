var sorteados = [
    [ 1, 44, 6, 2, 45, 60],
    [10, 21, 55, 25, 34, 44],
    [ 8, 18, 28, 29, 55, 59],
    [60, 25, 11, 34, 6, 9],
    [55, 43, 25, 12, 7, 11]
    ];

    var contador = 0;
    for (var i=0; i < sorteados.length; i++) {
    var nros = sorteados[i];
    for(var j=0; j < nros.length; j++) {
        if ( nros[j] === 25 )
            contador++;
    }
}
console.log(`O numero 25 apareceu ${contador} vezes`)