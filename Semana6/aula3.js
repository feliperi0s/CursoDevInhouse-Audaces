const obterDados = (id) => {
    return new Promise( (resolve, reject) => {
        if (id === 1) {
            const cliente = { id: 1, nome: 'Han Solo'}
            resolve(cliente);
        } else {
            reject(new Error('Cliente não encontrado! ID: ' + id));
        }
    });
};

async function processarClientes (){
    const resultado = await obterDados(1)
    console.log(resultado)
}
processarClientes()