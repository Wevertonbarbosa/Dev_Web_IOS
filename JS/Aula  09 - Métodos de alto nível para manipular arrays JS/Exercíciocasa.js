 let numeros = [17, 43, 8, 4, 97, 56, 29, 32]
 numeros.forEach(lista);
//console log com Numeros Pares
function lista (t){
    if (t == 4 || t == 8 || t == 56 || t == 32) {
         console.log(`Números pares: ${t}`);
    }
}
//Console Log com Numeros Impares
function lista(i){
    if (i == 17 || i == 43 || i == 97 || i == 29) {
         console.log(`Numeros Impares: ${i}`);
    }
}

console.log(
    numeros.filter((maiores)=>{
    return maiores <= 18
    })
);