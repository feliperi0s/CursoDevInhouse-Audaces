var extrato = [ 100, -35, -15, -5, 55, -20 ];
var saldoInicial = 0

 for( var i=0 ; i < extrato.length ; i++) {
        console.log(extrato[i])
}

for( var i=5 ;  i >=0 ; i--) {
    console.log(extrato[i])
    
}
for (var i=0 ; i < extrato.length ; i++){
    saldoInicial += extrato[i];
    
}
console.log(`Seu saldo final é de ${saldoInicial}`)

if (saldoInicial >=0){
    console.log(`Saldo positivo`)
}
else (saldoInicial >=0);{
    `Saldo negativo`
}
