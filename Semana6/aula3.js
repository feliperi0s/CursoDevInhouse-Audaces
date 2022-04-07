// const obterDados = (id) => {
//     return new Promise( (resolve, reject) => {
//         if (id === 1) {
//             const cliente = { id: 1, nome: 'Han Solo'}
//             resolve(cliente);
//         } else {
//             reject(new Error('Cliente não encontrado! ID: ' + id));
//         }
//     });
// };

// async function processarClientes (){
//     try {const resultado = await obterDados(1)
//     console.log(resultado)
//     const resultado2 = await obterDados(2)
// }
//     catch (erro){
//         console.log(erro.message);
//     }
// }
// processarClientes()

async function obterDadosGit(){
 const resp = await fetch('https://api.github.com/users/tiagoamp')
 const dados = await resp.json();
    
    const combinacao = { ...dados, linguagem: "javaScript"};
    const id = combinacao.id    
    const bio = combinacao.bio
    const login = combinacao.login
    const linguagem = combinacao.linguagem

    console.log(`o usuario ${login} de id ${id} conhece a linguagem ${linguagem} e tem a biografia ${bio} `);
}

obterDadosGit()