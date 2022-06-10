//Trouxe do HTML meus id's
let botao1 = document.getElementById('btn1');
let itemVal = document.getElementById('item');
let valorVal = document.getElementById('itemValor');
let valueQtn = document.getElementById('quantidade');

let addItem = document.getElementById('itemAdd');
let addValor = document.getElementById('valorAdd');
let qtnAdd = document.getElementById('quantidadeAdd');
let calculoSub = document.getElementById('subtotalAdd');

// lista UL para adicionar as li e os botões
let compras = document.getElementById('listCompra'); //UL
let total = document.getElementById('valorTotal');

//Adicionando método através do click (interagir com o usuário)
botao1.addEventListener('click', adicionar);

// Primeira validação dos campos
function adicionar() {
    if (itemVal.value === '' || valorVal.value === '' || valueQtn.value === '') {

        alert('Preencha os campos, Por favor!');

    } else {

        //Estilizar Valor do Item
        let infoItem = document.createElement('li');
        infoItem.innerHTML = itemVal.value;
        compras.appendChild(infoItem);

        //Estilizar Valor do Valor!
        let infoValor = document.createElement('li');
        infoValor.innerHTML = valorVal.value;
        compras.appendChild(infoValor);

        //Estilizar Valor da Quantidade!
        let infoQtn = document.createElement('li');
        infoQtn.innerHTML = valueQtn.value;
        compras.appendChild(infoQtn);

        //EStilizar SubTotal 
        let infoSub = document.createElement('li');
        //calculo do subtotal é valor * quantidade
        infoSub.innerHTML =  valorVal.value * valueQtn.value;
        compras.appendChild(infoSub);


         // botão +
        let botaoPlus = document.createElement('button');
        botaoPlus.style.width = '6vw';
        botaoPlus.style.height = '4vh';
        botaoPlus.style.background = 'red';
        botaoPlus.style.margin = '8px';
        botaoPlus.innerText = '+';
        botaoPlus.addEventListener('click', plus);
        infoQtn.appendChild(botaoPlus);
       
        
        function plus() {

            let calculo = infoQtn.value;
            infoQtn.innerHTML = calculo.value + 1;

        

        }
    }
}
// Calcular subtração (Subtototal - Valor)
        // Calcular subtotal (Valor x Quantidade)