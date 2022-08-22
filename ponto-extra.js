//map tb é uma função callback, tudo que ele faz é retornado como uma array.

const notas = [10, 9, 8, 7, 6]

const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota); // se ficar com o ++ depois do nota, ele vai passar o valor pro array e depios vai tentar somar 1

console.log(notasAtualizadas)

