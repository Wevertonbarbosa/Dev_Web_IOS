 let numeros = [17, 43, 8, 4, 97, 56, 29, 32];
 let impar_par =  numeros.forEach((num)=>{
//foumula de puxar números pares 
        if (num % 2 === 0) {
            console.log(`Números pares: ${num}`);
            
        }
        else {
            console.log(`Números impares:${num}`);
        }
 }); 

//Números menores ou igual a 18
console.log(' Menores ou iguais a 18:');
console.log(
    numeros.filter((maiores)=>{
    return maiores <= 18
    })
);