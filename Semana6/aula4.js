async function obterDadosGit(){
    const resp = await fetch('https://swapi.dev/api/people/1')
    const dados = await resp.json();
    const add = { ...dados, nave: "x-wing"};
    const planeta = add.homeworld
    const dadosplaneta0 = await fetch(planeta)
    const dadosPla = await dadosplaneta0.json();

    console.log(`${dados.name} do planeta ${dadosPla.name} pilata uma ${add.nave}.`)
}
obterDadosGit()
