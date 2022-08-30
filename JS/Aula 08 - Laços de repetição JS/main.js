//Laço While
let profHelo = 1;

while (profHelo <= 5) {
    console.log('Bate palma');
    //profHelo = profHelo + 1 é a mesma coisa do exemplo a baixo
    profHelo++; // sempre tem que
    //existir um incremento ou decremento
}

//Exibir o valor de 1 até 10
let contador = 1;

while (contador <= 10) {
    console.log(`O valor do contador é ? ${contador}`);
    contador++;
}

//Utilizando o Decremento
let contador2 = 10;

//começe com o valor 10 e termina com 0
while (contador2 >= 0) {
    console.log(`O valor: ${contador2}`);
    //decremento de forma extensa
    //contador2 = contador2 -1
    //decremento de forma curta
    contador2--;
}

//Do-While
do {
    console.log('Bater Palma');
    console.log(profHelo);
    profHelo++;
} while (profHelo <= 5);

//Laço For

for (let weverton = 1; weverton <= 5; weverton++) {
    console.log(`Olá Jackass`);
}
console.clear;

//começa com 10 e terminar com 0
for (let nova = 10; nova >= 0; nova--) {
    console.log(nova);
}

// Laçoes de repetição e Arrays
const frutas = ['maca', 'laranja', 'pera', 10];

for (let j = 0; j < frutas.length; j++) {
    console.log(`Nome: ${frutas[j]}`);
}

// Array de objetos e laços
console.clear();
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true,
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false,
    },
];
// For overloop
for (let t of todos) {
    console.log(t);
    console.log(t.text);
    console.log(t.id);
}
