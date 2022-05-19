let colaboradores = [
{

   nome: 'Rivelino',
   salario: 2500,
   vinculo: 'CLT'

},

{

    nome: 'Mario',
    salario: 1500,
    vinculo: 'CLT'

},

{

    nome: 'José',
    salario: 3200,
    vinculo: 'CLT'


},
{

    nome: 'Daniel',
    salario: 2150,
    vinculo: 'PJ'

},

{

    nome: 'Robinho',
    salario: 1100,
    vinculo: 'PJ'


}
]


//Calculo da Tabela INSS
let aliquota = 0
let inss  = 0

//Primeiro Funcionário
if (colaboradores[0].vinculo == 'CLT')
    if (colaboradores[0].salario <= 1212){
        aliquota = 7.5
    }
    else if (colaboradores[0].salario > 1212 && colaboradores[0].salario <= 2427){
        aliquota = 9.0
    }
    else if (colaboradores[0].salario > 2427 && colaboradores[0].salario <=  3641){
        aliquota = 12.0
    }
    else if (colaboradores[0].salario > 3641 && colaboradores[0].salario <= 7087) {
         aliquota = 14.0
    }
else {
    aliquota = 0
}
inss = colaboradores[0].salario * (aliquota /100)


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

inss5 = colaboradores[4].salario * (aliquota /100)
console.log(inss5);

// let contador2 = 0;

// while(contador2 <= 4){
//     console.log(`Trabalhador ${colaboradores[contador2].nome}, sua contribuição no INSS:${inss}`)
//     contador2++

// }
























