// Gera um número aleatório entre 0 e 9
function obterNumeroAleatorio() {
    const min = 0; 
    const max = 9;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numeroAletorio = new Promise ((resolve,reject)=>{
    novonumero = obterNumeroAleatorio()
    console.log(`Numero sorteado ${novonumero}`)
    if (novonumero%2 == 0) {
        resolve(novonumero * 2)
    }else {
        reject(novonumero)
        
    }
})

numeroAletorio
    .then( (valor) => {
        console.log(`Numero dobrado ${valor}`);
    })
    .catch( (valor) => {
        console.log(valor);
    });