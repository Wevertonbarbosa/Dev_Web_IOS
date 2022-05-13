//Criar um Array chamado carros com 8 carros e percorra o array de 2 em 2 exibindo os carros do array

let carros = [
     'veloster',
     'camaro',
     'supra',
     'lancer',
     'jetta',
     'hb20',
     'evoque',
     'velar'

]

for(let contar = 0; contar < carros.length; contar+=2){
    console.log(`tipos de carros: ${carros[contar]}`)
}