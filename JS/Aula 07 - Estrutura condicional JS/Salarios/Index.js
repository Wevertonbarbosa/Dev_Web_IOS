// Array com os colaboradores
let colaboradores = [
    {
        nome: 'Rivelino',
        salario: 2500,
        vinculo: 'CLT',
    },

    {
        nome: 'Mario',
        salario: 1500,
        vinculo: 'CLT',
    },

    {
        nome: 'José',
        salario: 3200,
        vinculo: 'CLT',
    },
    {
        nome: 'Daniel',
        salario: 2150,
        vinculo: 'PJ',
    },

    {
        nome: 'Robinho',
        salario: 1100,
        vinculo: 'PJ',
    },
];
// Array espelho (Não há nada dentro mas ajuda com método While)
let inss = new Array(5);

//Calculo da Tabela INSS
let aliquota = 0;

//Primeiro Funcionário
if (colaboradores[0].vinculo == 'CLT') {
    if (colaboradores[0].salario <= 1212) {
        aliquota = 7.5;
    } else if (
        colaboradores[0].salario > 1212 &&
        colaboradores[0].salario <= 2427
    ) {
        aliquota = 9.0;
    } else if (
        colaboradores[0].salario > 2427 &&
        colaboradores[0].salario <= 3641
    ) {
        aliquota = 12.0;
    } else if (
        colaboradores[0].salario > 3641 &&
        colaboradores[0].salario <= 7087
    ) {
        aliquota = 14.0;
    }
} else {
    aliquota = 0;
}
inss[0] = colaboradores[0].salario * (aliquota / 100);

//Segundo Funcionário

if (colaboradores[1].vinculo == 'CLT') {
    if (colaboradores[1].salario <= 1212) {
        aliquota = 7.5;
    } else if (
        colaboradores[1].salario > 1212 &&
        colaboradores[1].salario <= 2427
    ) {
        aliquota = 9.0;
    } else if (
        colaboradores[1].salario > 2427 &&
        colaboradores[1].salario <= 3641
    ) {
        aliquota = 12.0;
    } else if (
        colaboradores[1].salario > 3641 &&
        colaboradores[1].salario <= 7087
    ) {
        aliquota = 14.0;
    }
} else {
    aliquota = 0;
}

inss[1] = colaboradores[1].salario * (aliquota / 100);

//terceiro Funcionário

if (colaboradores[2].vinculo == 'CLT') {
    if (colaboradores[2].salario <= 1212) {
        aliquota = 7.5;
    } else if (
        colaboradores[2].salario > 1212 &&
        colaboradores[2].salario <= 2427
    ) {
        aliquota = 9.0;
    } else if (
        colaboradores[2].salario > 2427 &&
        colaboradores[2].salario <= 3641
    ) {
        aliquota = 12.0;
    } else if (
        colaboradores[2].salario > 3641 &&
        colaboradores[2].salario <= 7087
    ) {
        aliquota = 14.0;
    }
} else {
    aliquota = 0;
}

inss[2] = colaboradores[2].salario * (aliquota / 100);

//Quarto Funcionário

if (colaboradores[3].vinculo == 'CLT') {
    if (colaboradores[3].salario <= 1212) {
        aliquota = 7.5;
    } else if (
        colaboradores[3].salario > 1212 &&
        colaboradores[3].salario <= 2427
    ) {
        aliquota = 9.0;
    } else if (
        colaboradores[3].salario > 2427 &&
        colaboradores[3].salario <= 3641
    ) {
        aliquota = 12.0;
    } else if (
        colaboradores[3].salario > 3641 &&
        colaboradores[3].salario <= 7087
    ) {
        aliquota = 14.0;
    }
} else {
    aliquota = 0;
}

inss[3] = colaboradores[3].salario * (aliquota / 100);
//console.log(inss4);

//Quinto Funcionário

//aliquota = 0;
if (colaboradores[4].vinculo == 'CLT') {
    if (colaboradores[4].salario <= 1212) {
        aliquota = 7.5;
    } else if (
        colaboradores[4].salario > 1212 &&
        colaboradores[4].salario <= 2427
    ) {
        aliquota = 9.0;
    } else if (
        colaboradores[4].salario > 2427 &&
        colaboradores[4].salario <= 3641
    ) {
        aliquota = 12.0;
    } else if (
        colaboradores[4].salario > 3641 &&
        colaboradores[4].salario <= 7087
    ) {
        aliquota = 14.0;
    }
} else {
    aliquota = 0;
}

inss[4] = colaboradores[4].salario * (aliquota / 100);

let contador = 0;

while (contador <= 4) {
    console.log(
        `Trabalhador ${colaboradores[contador].nome}, seu vinculo é : ${colaboradores[contador].vinculo}, sua contribuição no INSS: R$:${inss[contador]} `
    );
    contador++;
}
