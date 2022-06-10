//Trouxe do HTML meus id's 
let botao1 = document.getElementById('btn1');
let itemVal = document.getElementById('item');
let valorVal = document.getElementById('itemValor');
let valueQtn = document.getElementById('quantidade');

let addItem = document.getElementById('itemAdd');
let addValor = document.getElementById('valorAdd');
let qtnAdd = document.getElementById('quantidadeAdd');
let calculoSub = document.getElementById('subtotalAdd');
let total = document.getElementById('valorTotal');

//Adicionando método através do click (interagir com o cliente)
botao1.addEventListener('click', adicionar);

// Primeira validação dos campos
function adicionar() {


    if (itemVal.value ==='' || valorVal.value ==='' || valueQtn.value ==='') {
        
        alert('Preencha os campos, Por favor!');

    }else {
        addItem.innerHTML = itemVal.value;
        addValor.innerHTML = valorVal.value;
        qtnAdd.innerHTML = valueQtn.value;
        calculoSub.innerHTML  = valorVal.value * valueQtn.value
    }
    
};

