let alunos = []

function criarAluno(nome, idade, serie){
        const aluno = {
            id: alunos.length,
            nome,
            idade,
            serie,
        }
        alunos.push(aluno)
}

criarAluno('Arthur', 23, 'Formado')
criarAluno('Matheus', 24, 'Formado')
criarAluno('Davi', 17, '2B')
console.log(alunos);


function lerAlunos(id){
    alunos = alunos.filter((aluno) => aluno.id === id)
    if(alunos){
        console.log(alunos);  
    }
        
    
}
lerAlunos(2)

function atualizarAluno({id, ...rest}){
    const indice = alunos.findIndex((i) => i.id === id) //falta terminar isso aqui 
}



//deletar aluno 




