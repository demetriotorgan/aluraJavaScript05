const listaLivros = require('../Aula02/listaLivros');
const trocaLugar = require('./index');

function quickSort(array, esquerdaArray, direitaArray){
    if(array.length > 1){
        let indiceAtual = particiona(array, esquerdaArray, direitaArray );
            if(esquerdaArray < indiceAtual -1){
                quickSort(array, esquerdaArray, indiceAtual-1)
            }
            if(indiceAtual < direitaArray){
                quickSort(array, indiceAtual, direitaArray);
            }
    }
return array
}

function particiona(array, esquerdaArray, direitaArray){
    console.log('array', array);
    console.log('esquerda, direita', esquerdaArray, direitaArray);
    
    let pivo = array[Math.floor((esquerdaArray+direitaArray)/2)]
        let atualEsquerda = esquerdaArray ;
        let atualDireita = direitaArray;
            while(atualEsquerda <= atualDireita){
                while (array[atualEsquerda].preco < pivo.preco){
                    atualEsquerda++;
                }
                while(array[atualDireita].preco > pivo.preco){
                    atualDireita--;
                }
                    if(atualEsquerda <= atualDireita){
                        trocaLugar(array, atualEsquerda, atualDireita);
                        atualEsquerda++;
                        atualDireita--;
                    }
            }
            return atualEsquerda;
}

console.log(quickSort(listaLivros, 0, listaLivros.length-1));