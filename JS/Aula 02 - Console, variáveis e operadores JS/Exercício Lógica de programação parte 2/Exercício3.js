let Carro = 'Veloster';
const distribuidor = 28;
const impostos = 45;
const fabrica = 20.000;
const distribuidora_fabrica = fabrica * (distribuidor/100); 
const impostos_fabrica = fabrica * (impostos/100);
const Valor_do_Carro = distribuidora_fabrica + impostos_fabrica + fabrica

//tofixed = serve para mostrar valor numérico que está em oculto 
console.log(`O preço do Carro é R$:${Valor_do_Carro.toFixed(3)}`)   