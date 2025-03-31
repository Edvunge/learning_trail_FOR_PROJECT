// cria um Map
const funMap = new Map();

funMap.set(360, 'Número da minha casa'); // número como chave
funMap.set(true, 'Eu escrevo blogs!'); // booleano como chave

let obj = {'nome': 'tapas'}
funMap.set(obj, true); // objeto como chave

console.log(funMap); 