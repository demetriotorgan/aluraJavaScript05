const {edGalho, edFolha} = require('./array')

function juntaListas(lista1, lista2){
    let listaFinal = [];
    let posicaoAtualLista1 = 0;
    let posicaoAtualLista2 = 0;
    let atualListaFinal =0;

        while(posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length){
            let produtoAtualLista1 = lista1[posicaoAtualLista1];
            let produtoAtualLista2 = lista2[posicaoAtualLista2];                
            // console.log(`comparando ${produtoAtualLista1.titulo} com  ${produtoAtualLista2.titulo}`)
                if(produtoAtualLista1.preco < produtoAtualLista2.preco){
                    listaFinal[atualListaFinal] = produtoAtualLista1;
                    posicaoAtualLista1++;
                } else {
                    listaFinal[atualListaFinal] = produtoAtualLista2;
                    posicaoAtualLista2++;
                }
            atualListaFinal++;
        }
            while(posicaoAtualLista1 < lista1.length){
                listaFinal[atualListaFinal] = lista1[posicaoAtualLista1];
                posicaoAtualLista1++;
                atualListaFinal++;
            }
            while(posicaoAtualLista2 < lista2.length){
                listaFinal[atualListaFinal] = lista2[posicaoAtualLista2];
                posicaoAtualLista2++;
                atualListaFinal++;
            }
    return listaFinal;    
}

console.log(juntaListas(edGalho, edFolha));