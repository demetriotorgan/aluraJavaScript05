const listaLivros = require('./listaLivros');

function mergeSort(array, nivelAninhamento = 0){
    //analisando a recursividade
    console.log(`Nível de aninhamento ${nivelAninhamento}`);
    console.log(array);

    if(array.length > 1){
        const meioArray = Math.floor(array.length/2);
            const parte1 = mergeSort(array.slice(0, meioArray), nivelAninhamento++);
            const parte2 = mergeSort(array.slice(meioArray, array.length), nivelAninhamento++);                
                array = ordena(parte1, parte2);               
    }
    return array;
}

function ordena(parte1, parte2){
    let posicaoAtualParte1 = 0;
    let posicaoAtualParte2 =0;
    let resultado = [];

        while(posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length){
            let produtoAtualParte1 = parte1[posicaoAtualParte1];
            let produtoAtualParte2 = parte2[posicaoAtualParte2];
                if(produtoAtualParte1.preco < produtoAtualParte2.preco){
                    resultado.push(produtoAtualParte1);
                    posicaoAtualParte1++;
                } else {
                    resultado.push(produtoAtualParte2);
                    posicaoAtualParte2++;
                }
        }
        return resultado.concat(            
            posicaoAtualParte1 < parte1.length
            ? parte1.slice(posicaoAtualParte1)
            : parte2.slice(posicaoAtualParte2)
        )
}

console.log(mergeSort(listaLivros));
