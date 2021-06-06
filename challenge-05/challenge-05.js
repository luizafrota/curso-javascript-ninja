/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = [11, 22, 33, 44, 55];
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaArray(arg){
return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
retornaArray(array).[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function retornaValorDoIndice(arg, num){
return arg[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array2 = ['oi', true, false, 3, undefined];
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
retornaValorDoIndice(array2, 0);

retornaValorDoIndice(array2, 1);

retornaValorDoIndice(array2, 2);

retornaValorDoIndice(array2, 3);

retornaValorDoIndice(array2, 4);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(pNomeLivro){
var lista = { 
  comunicacao : {nomedolivro: 'livro1', quantidadePaginas: 1,
                 autor: 'jose',
                 editora: 'Diálogo'} ,
   acao : {nomedolivro: 'livro2', quantidadePaginas: 3,
                 autor: 'jorge',
                 editora: 'Diálogo2'},
    mundo : {nomedolivro: 'livro3', quantidadePaginas: 12,
                 autor: 'amanda',
                 editora: 'Diálogo3'}
    
};
    if(lista.comunicacao.nomedolivro === pNomeLivro){
        return lista.comunicacao;
    }
    if (lista.acao.nomedolivro === pNomeLivro){
        return lista.acao;
    }
 if (lista.mundo.nomedolivro === pNomeLivro){
        return lista.mundo;
    }
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
