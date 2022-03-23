const nomes = ['ragnar', 'lagertha', 'floki', 'bjorn', 'rollo'];
const arr = [0,0,0,1,0,1,0,1,0,2,1,0,1,1,1,1,0];


const resultado1 = nomes.find(function (n) {
    return n.startsWith('flo')
})

console.log(resultado1);

const numerosBinarios = arr.every( function(nro) {
    return nro == 0 || nro == 1;
});
console.log( numerosBinarios ); 
