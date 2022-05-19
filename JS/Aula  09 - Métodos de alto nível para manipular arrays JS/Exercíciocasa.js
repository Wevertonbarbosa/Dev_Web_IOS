 let numeros = [17, 43, 8, 4, 97, 56, 29, 32]
 let impar_par =  numeros.forEach((num)=>{

        if (num % 2 === 0) {
            console.log(`Números pares: ${num}`);
            
        }
        else {
            console.log(`Números impares:${num}`);
        }
 }); 

//console log com Numeros Pares
console.log(
    numeros.filter((maiores)=>{
    return maiores <= 18
    })
);