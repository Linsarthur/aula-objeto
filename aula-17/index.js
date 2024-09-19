//function - arrow function - parametros

// function somaDasNotas(notas){
//     let soma = 0
//     notas.forEach((nota) => soma += nota)
//     return soma
    
// }


// function calcularMedia(notas){
//     const soma = somaDasNotas(notas)
//     return (soma/notas.length).toFixed(2)
   
// }

// console.log(calcularMedia([5.5, 7, 4, 8, 6.3]));

//array - objetos - desestruturação

let alunos = [
    {id: 1, nome: 'Matheus', idade: 16, serie: '1A'},
    {id: 2, nome: 'Arthur', idade: 15, serie: '1B'},
    {id: 3, nome: 'Davi', idade: 17, serie: '1C'},

]


alunos.unshift({id: 0, nome: 'Fulano', idade:16, serie: '2C'})
alunos = alunos.filter((aluno) => aluno.id !== 2)
alunos.forEach((aluno) => {
    if(aluno.id === 1){
        aluno.nome = 'Ciclano'
    }
})

alunos.pop()
alunos.shift()

console.log(alunos);

