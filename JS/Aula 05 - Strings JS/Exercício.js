const lerolero = "Dr Stephen Strange lança um feitiço proibido que abre um portal para o multiverso. No entanto, surge uma ameaça que pode ser grande demais para sua equipe lidar."

//Um caracter da String por posição
console.log(lerolero.charAt(0));

//Tamanho da string com Length
console.log(`O tamanho da String é: ${lerolero.length}`);

//Método Replace troca de palavras na String
let lerolero1 = lerolero.replace('Dr Stephen Strange', "Feiticeira Escarlate");
console.log (lerolero1);

//Método substrings(Split)
let lerolero2 = lerolero1.split(' ');
console.log(lerolero2);

//Mostrando no console em posição
console.log(lerolero2[12]);

//Texto em Maiúsculo
console.log(lerolero1.toUpperCase());
