const numeros = [1, 2, 3, 4, 5]

for(let i = 0; i < numeros.length; i++){
    const somaDosNumeros = numeros.map((num) => {
        num + numeros[i]
        
        
    })
    console.log(somaDosNumeros);
}

