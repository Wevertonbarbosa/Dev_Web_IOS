console.clear();

let convidados = ['Joaquim', 'José','Silva','Xavier'];
console.log (convidados);


//  Unshift (Inserindo no Inicio Amanda)
convidados.unshift('Amanda');
console.log(`Entrando Amanda: ${convidados}`);

// POP (Retirando Xavier ultimo colocado)
convidados.pop();
console.log(`Saiu Xavier: ${convidados}`);

//Push (Inserindo na ultima posição Zuleica)
convidados.push('Zuleica');
console.log(`Entrou Zuleica Ultima posição:  ${convidados}`);

//Shift (Tirando Amanda da primeira posição)
convidados.shift();
console.log(`Retirando em primeira posição: ${convidados}`);

// Delete (Retirando Silva de uma determinada posição)

delete convidados [2];
console.log(`Deletando em uma determinada posição: ${convidados}`);


//Inserindo em uma determinada posição
convidados[2] = 'Silvana';
console.log(`Inserindo em uma determinada posição:  ${convidados}`);

//template script
console.log(`Ficaram 4 pessoas na festa, que são: ${convidados}`);



//Novo Array Parte 2
let grifes = ['Sergio K' , 'Giorgio Armani', 'Balmain', 'Lacoste', 'Mary kay'];
console.log (`Novo Array Parte 2 : ${grifes}`);

//Método Splice
grifes.splice(1, 0, 'Nike', 'Carolina Herrera');
console.log (`Método Splice : ${grifes}`);

//Método Sort
grifes.sort();
console.log(`Método Sort : ${grifes}`);

//Template String
console.log(`Antes : Sergio K, Giorgio Armani, Balmain, Lacoste, Mary Kay `);
console.log(`Depois : ${grifes}`);