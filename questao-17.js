//questão 17

const pessoa = {nome: 'alice', sobrenome:'silva', idade: 25}

Object.keys(pessoa).forEach((key) => {
    console.log(`\nChave: ${key}`);
    console.log(`Valor: ${pessoa[key]}`);
    
    
})