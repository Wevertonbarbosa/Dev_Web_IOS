adicionarItem = document.querySelector('.adicionarItem');
itemAdicionar = document.querySelector('.itemAdicionar');
valorAdicionar = document.querySelector('.valorAdicionar');
quantidadeAdicionar = document.querySelector('.quantidadeAdicionar');

divLista = document.querySelector('.divLista');
lista = document.querySelector('.lista');

aumentar = document.querySelector('.aumentar');
diminuir = document.querySelector('.diminuir');
excluir = document.querySelector('.excluir');

total = document.querySelector('.total');
liTotal = document.querySelector('.liTotal');

adicionarItem.addEventListener('submit', criarLista);


i = 0;
guardarI = [];

function criarLista(e){
    e.preventDefault();
    if(itemAdicionar.value != '' && valorAdicionar.value != '' && quantidadeAdicionar.value != ''){
        li = document.createElement('li');
        li.className = `li`;
        li.style.alignItems= 'center';
        li.style.display = 'inline-flex';
        lista.appendChild(li);

        //item 
        item = document.createElement('span');
        item.innerHTML = `${itemAdicionar.value}`;
        item.style.fontStyle = 'italic';
        item.style.fontWeight = 'bold';
        item.style.fontSize = 'large' ;
        item.style.alignItems = 'center';
        li.appendChild(item);

        // Valor 
        valor = document.createElement('span');
        valorGuardado = valorAdicionar.value;
        valor.innerHTML = `${valorGuardado}`;
        valor.style.fontStyle = 'italic';
        valor.style.fontWeight = 'bold';
        valor.style.fontSize = 'large' ;
        valor.style.margin = '0 54px';
        valor.style.alignItems = 'center';
        li.appendChild(valor);

        //Quantidade
        quantidade = document.createElement('span');
        quantidadeGuardada = quantidadeAdicionar.value;
        quantidade.innerHTML = `${quantidadeGuardada}`;
        quantidade.style.fontStyle = 'italic';
        quantidade.style.fontWeight = 'bold';
        quantidade.style.fontSize = 'large' ;
        quantidade.style.alignItems = 'center';
        quantidade.style.margin = '0 47px';
        quantidade.className = `qtd`;
        quantidade.id = `qtd${i}`;
        li.appendChild(quantidade);        

        botaoAumentar = document.createElement('button');
        botaoAumentar.innerHTML = '+';
        botaoAumentar.className = `btn btn-success aumentar`;
        botaoAumentar.style.marginLeft = '20px';
        botaoAumentar.style.marginRight = '5px';
        li.appendChild(botaoAumentar);
        botaoAumentar.addEventListener('click', somar);
        botaoAumentar.addEventListener('click', atualizarTotal);

        function somar(e){
            valorAntigo = e.target.nextElementSibling.nextElementSibling.nextElementSibling.textContent
            guardarValorQuantidadeSomar = e.target.previousElementSibling.textContent
            guardarValorQuantidadeSomar++;
            e.target.previousElementSibling.innerHTML = `${guardarValorQuantidadeSomar}`
            e.target.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = guardarValorQuantidadeSomar*valor.textContent
        }
        //Bot??o descremento
        botaoDiminuir = document.createElement('button');
        botaoDiminuir.innerHTML = '-';
        botaoDiminuir.className = 'btn btn-info diminuir';
        botaoDiminuir.style.marginRight = '5px';
        li.appendChild(botaoDiminuir);
        botaoDiminuir.addEventListener('click', subtrair);
        botaoDiminuir.addEventListener('click', atualizarTotal);
        function subtrair(e){
            valorAntigo = e.target.nextElementSibling.nextElementSibling.textContent
            guardarValorQuantidadeSubtrair = e.target.previousElementSibling.previousElementSibling.textContent
            guardarValorQuantidadeSubtrair--
            e.target.previousElementSibling.previousElementSibling.innerHTML = `${guardarValorQuantidadeSubtrair}`
            e.target.nextElementSibling.nextElementSibling.innerHTML = guardarValorQuantidadeSubtrair*valor.textContent
        }

        botaoExcluir = document.createElement('button');
        botaoExcluir.innerHTML = 'X';
        botaoExcluir.className = 'btn btn-danger excluir';
        li.appendChild(botaoExcluir);
        botaoExcluir.addEventListener('click', excluirLi);
        botaoExcluir.addEventListener('click', atualizarTotal);
        function excluirLi(e){
            e.target.parentNode.remove();
        }

        //Subtotal
        subtotal = document.createElement('span');
        subtotal.innerHTML = quantidade.textContent*valor.textContent;
        subtotal.className = 'subtotal';
        subtotal.style.marginLeft = '80px';
        li.appendChild(subtotal);

        i++
    } else{
        alert('Preencha os campos corretamente!');
    }
}

adicionarItem.addEventListener('submit', mostrarTotal);
guardarSubtotalBotaoAdd = [];

function mostrarTotal(){
    guardarSubtotalBotaoAdd.push(parseInt(subtotal.textContent))
    result = 0;
    for(var j = 0; j < guardarSubtotalBotaoAdd.length; j++) {
        result += guardarSubtotalBotaoAdd[j];
    }
    showTotal = document.createElement('li');
    showTotal.innerHTML = `R$${result},00`;
    showTotal.className = 'liTotal';
    total.appendChild(showTotal);
    showTotal.previousElementSibling.remove()
}

function atualizarTotal(e){
    if(e.target.className === 'btn btn-info aumentar'){
        valorNovo = e.target.nextElementSibling.nextElementSibling.nextElementSibling.textContent
        verificarPosicaoItemRemovido = guardarSubtotalBotaoAdd.indexOf(parseInt(valorAntigo))
        guardarSubtotalBotaoAdd.splice(verificarPosicaoItemRemovido, 1)
        guardarSubtotalBotaoAdd.push(parseInt(valorNovo))

        result = 0;

        for(var j = 0; j < guardarSubtotalBotaoAdd.length; j++) {
            result += guardarSubtotalBotaoAdd[j];
        }

        showTotal = document.createElement('li');
        showTotal.innerHTML = `R$${result},00`;
        showTotal.className = 'liTotal';
        total.appendChild(showTotal);
    
        showTotal.previousElementSibling.remove()
    } else if(e.target.className === 'btn btn-info diminuir'){ 
        valorNovo = e.target.nextElementSibling.nextElementSibling.textContent
        verificarPosicaoItemRemovido = guardarSubtotalBotaoAdd.indexOf(parseInt(valorAntigo));
        guardarSubtotalBotaoAdd.splice(verificarPosicaoItemRemovido, 1);
        guardarSubtotalBotaoAdd.push(parseInt(valorNovo));

        result = 0;

        for(var j = 0; j < guardarSubtotalBotaoAdd.length; j++) {
            result += guardarSubtotalBotaoAdd[j];
        }

        showTotal = document.createElement('li');
        showTotal.innerHTML = `R$${result},00`;
        showTotal.className = 'liTotal';
        total.appendChild(showTotal);
    
        showTotal.previousElementSibling.remove();
    } else if(e.target.className == 'btn btn-danger excluir'){
        verificarPosicaoItemRemovido = guardarSubtotalBotaoAdd.indexOf(parseInt(e.target.nextElementSibling.textContent))
        guardarSubtotalBotaoAdd.splice(verificarPosicaoItemRemovido, 1);

        result = 0;

        for(var j = 0; j < guardarSubtotalBotaoAdd.length; j++) {
            result += guardarSubtotalBotaoAdd[j];
        }

        showTotal = document.createElement('li');
        showTotal.innerHTML = `R$${result},00`;
        showTotal.className = 'liTotal';
        total.appendChild(showTotal);
    
        showTotal.previousElementSibling.remove();
    }
}