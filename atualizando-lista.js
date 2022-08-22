const listaDeChamada = ["joão", "ana", "caio", "lara", "marjorie", "leo"]

//listaDeChamada.splice(1, 2, "rodrigo") //começa a remover no indice "", remove qntos "", e pode adicionar

listaDeChamada.splice(2, 0, "Rodrigo") // nao tira nenhum item, e adicionou o rodrigo no item 2.

console.log(` Lista de chamada: ${listaDeChamada}`)