// // Gera um número aleatório entre 0 e 9
// function obterNumeroAleatorio() {
//     const min = 0; 
//     const max = 9;
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const numeroAletorio = new Promise ((resolve,reject)=>{
//     novonumero = obterNumeroAleatorio()
//     console.log(`Numero sorteado ${novonumero}`)
//     if (novonumero%2 == 0) {
//         resolve(novonumero * 2)
//     }else {
//         reject(novonumero)
        
//     }
// })

// numeroAletorio
//     .then( (valor) => {
//         console.log(`Numero dobrado ${valor}`);
//     })
//     .catch( (valor) => {
//         console.log(valor);
//     });


//.................................................

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => {
        console.log('resultado total', res);
        return res;
    })
    .then(res => res.filter(user => user.id === 2 || user.id === 3) )
    .then(res => 
        res.map(user => {
            return {...user, status: 'VERIFICADO'};
        })
    )
    .then(res => console.log('resultado filtrado', res));
    
    
    