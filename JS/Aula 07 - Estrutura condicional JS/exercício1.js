let colaboradores = [
{

   nome: 'Rivelino',
   salario: 2.500,
   vinculo: 'CLT'

},

{

    nome: 'Mario',
    salario: 1.500,
    vinculo: 'CLT'

},

{

    nome: 'José',
    salario: 3.200,
    vinculo: 'CLT'


},
{

    nome: 'Daniel',
    salario: 2.150,
    vinculo: 'PJ'

},

{

    nome: 'Robinho',
    salario: 1.100,
    vinculo: 'PJ'


}
]






//
// let contratos = [
    // colaboradores[0].vinculo == 'CLT' ? console.log (`É CLT, seu nome: ${colaboradores[0].nome}`) : console.log (`É PJ, seu nome: ${colaboradores[0].nome}`),
    // colaboradores[1].vinculo == 'CLT' ? console.log (`É CLT, seu nome: ${colaboradores[1].nome}`) : console.log (`É PJ, seu nome: ${colaboradores[1].nome}`), 
    // colaboradores[2].vinculo == 'CLT' ? console.log (`É CLT, seu nome: ${colaboradores[2].nome}`) : console.log (`É PJ, seu nome: ${colaboradores[2].nome}`),
    // colaboradores[3].vinculo == 'CLT' ? console.log (`É CLT, seu nome: ${colaboradores[3].nome}`) : console.log (`É PJ, seu nome: ${colaboradores[3].nome}`),
    // colaboradores[4].vinculo == 'CLT' ? console.log (`É CLT, seu nome: ${colaboradores[4].nome}`) : console.log (`É PJ, seu nome: ${colaboradores[4].nome}`)
// ]


//Calculo da Tabela INSS

let aliquota = 0
let inss    = 0
let base = colaboradores[0].salario
// let base = colaboradores[0].salario
if (colaboradores[0].vinculo == 'CLT') {
}
else {
    console.log();
}

if (base <= 1.212) {
    base * (7.5 / 100)
    console.log(`Seu desconto é ${base}`);
}

else {

} 


if (base >= 1.212 && base <= 2.427) {
    base * (9.0 / 100) 
    console.log(`Seu desconto é ${base}`);
}
else {

}

if ( base >= 2427 && base <=3.641) {
    base * (12.0 / 100)
    console.log(`Seu desconto é ${base}`);
}
else if (base >= 3.641 && base >= 7.087) {
    base * (14.0 / 100)
    console.log(`Seu desconto é ${base}`);   
}
else {
    base * (aliquota)
console.log(`Seu desconto é ${base}`);
}











//Primeiro funcionário
// if (colaboradores[0].vinculo == 'PJ'){
//   var desconto = 0
// }
// else if (colaboradores[0].salario > 1212 && colaboradores[0].salario <= 2427) {
//     colaboradores[0].salario * (7.5 / 100)
    
// }
// else if (colaboradores[0].salario > 1212 && colaboradores[0].salario <= 2427){
//     colaboradores[0].salario * (9.0 / 100)
// }
// else if (colaboradores[0].salario > 2427 && colaboradores[0].salario <=  3641){
//     colaboradores[0].salario * (12.0 / 100)
// }
// else if (colaboradores[0].salario > 3641 && colaboradores[0].salario <= 7087){
//     colaboradores[0].salario * (12.0 / 100)
// }
// else if (colaboradores[0].salario > 3641 && colaboradores[0].salario <= 7087){
//     colaboradores[0].salario * (14.0 / 100)
// }
// else {
//     colaboradores[0].salario * (aliquota / 100)
// }
// console.log(`O vinculo do ${colaboradores[0].nome} é ${colaboradores[0].vinculo} e paga de INSS ${desconto}  `);
// inss = colaboradores[0].salario * (aliquota /100)


























//Segundo Funcionário
let inss2 = 0
if (colaboradores[1].vinculo == 'CLT')
    if (colaboradores[1].salario <= 1212){
        aliquota = 7.5
    }
    else if (colaboradores[1].salario > 1212 && colaboradores[1].salario <= 2427){
        aliquota = 9.0
    }
    else if (colaboradores[1].salario > 2427 && colaboradores[1].salario <=  3641){
        aliquota = 12.0
    }
    else if (colaboradores[1].salario > 3641 && colaboradores[1].salario <= 7087) {
        aliquota = 14.0
    }
else {
    aliquota = 0
}

inss2 = colaboradores[1].salario * (aliquota /100)



//terceiro Funcionário
let inss3 = 0
if (colaboradores[2].vinculo == 'CLT')
    if (colaboradores[2].salario <= 1212){
        aliquota = 7.5
    }
    else if (colaboradores[2].salario > 1212 && colaboradores[2].salario <= 2427){
        aliquota = 9.0
    }
    else if (colaboradores[2].salario > 2427 && colaboradores[2].salario <=  3641){
        aliquota = 12.0
    }
    else if (colaboradores[2].salario > 3641 && colaboradores[2].salario <= 7087) {
        aliquota = 14.0
    }
else {
    aliquota = 0
}

inss3 = colaboradores[2].salario * (aliquota /100)



//Quarto Funcionário
let inss4 = 0
if (colaboradores[3].vinculo == 'CLT')
    if (colaboradores[3].salario <= 1212){
        aliquota = 7.5
    }
    else if (colaboradores[3].salario > 1212 && colaboradores[3].salario <= 2427){
        aliquota = 9.0
    }
    else if (colaboradores[3].salario > 2427 && colaboradores[3].salario <=  3641){
        aliquota = 12.0
    }
    else if (colaboradores[3].salario > 3641 && colaboradores[3].salario <= 7087) {
        aliquota = 14.0
    }
else {
    aliquota = 0
}

inss4 = colaboradores[3].salario * (aliquota /100)


//Quinto Funcionário
let inss5 = 0
if (colaboradores[4].vinculo == 'CLT')
    if (colaboradores[4].salario <= 1212){
        aliquota = 7.5

    }
    else if (colaboradores[4].salario > 1212 && colaboradores[4].salario <= 2427){
        aliquota = 9.0
        
    }
    else if (colaboradores[4].salario > 2427 && colaboradores[4].salario <=  3641){
        aliquota = 12.0
    
    }
    else if (colaboradores[4].salario > 3641 && colaboradores[4].salario <= 7087) {
        aliquota = 14.0
        
    }
else {
    aliquota = 0
}

















// //Filtro do Vínculo através do IF e Else
// if (colaboradores[0].vinculo == 'CLT'){

//     console.log(`É CLT, seu nome: ${colaboradores[0].nome}`);
// }
// else {
//     console.log(`É PJ, seu nome: ${colaboradores[0].nome}`)
// } 

// if (colaboradores[1].vinculo == 'CLT'){
//     console.log(`É CLT, seu nome: ${colaboradores[1].nome}`);
// }
// else {
//     console.log(`É PJ, seu nome: ${colaboradores[1].nome}`)
// } 

// if (colaboradores[2].vinculo == 'CLT'){
//     console.log(`É CLT, seu nome: ${colaboradores[2].nome}`);
// }
// else {
//     console.log(`É PJ, seu nome: ${colaboradores[2].nome}`)
// } 

// if (colaboradores[3].vinculo == 'CLT'){
//     console.log(`É CLT, seu nome: ${colaboradores[3].nome}`);
// }
// else {
//     console.log(`É PJ, seu nome: ${colaboradores[3].nome}`)
// } 

// if (colaboradores[4].vinculo == 'CLT'){
//     console.log(`É CLT, seu nome: ${colaboradores[4].nome}`);
// }
// else {
//     console.log(`É PJ, seu nome: ${colaboradores[4].nome}`)
// } 









// if (colaboradores[0].salario <= 1.212){
//     console.log(`Este é o Desconto ${colaboradores[0].salario * (7.5 / 100)}`)
// }
// else {
//     console.log('')
// }

// if (colaboradores[0].salario >= 1.212){
//     console.log(`Este é o Desconto ${colaboradores[0].salario * (9.0 / 100)}`)
// }
// else {
//     console.log()
// }

// if (colaboradores[0].salario >= 2.427){
//     console.log(`Este é o Desconto ${colaboradores[0].salario * (9.0 / 100)}`)
// }
// else {
//     console.log()
// }   
























// else if (colaboradores[0].salario >= 2.427){
//     console.log(`Este é o Desconto ${colaboradores[0].salario * (12.0 / 100)}`)
// }
// else if(colaboradores[0].salario >= 3.641){
//     console.log(`Este é o Desconto ${colaboradores[0].salario * (14.0 / 100)}`)
// }
















