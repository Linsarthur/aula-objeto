    //questão 16


const array = [{ nome: 'fulano', idade: 30},
    { nome: 'fulano', idade: 30},
    { nome: 'fulano', idade: 30},
    { nome: 'fulano', idade: 30},
    { nome: 'fulano', idade: 30}
]


for (const item of array){
    console.log(item.idade);
}


array.forEach((item) => console.log(item.nome))