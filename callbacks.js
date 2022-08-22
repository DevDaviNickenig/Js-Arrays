// o forEach só funciona se vc passar uma funcão pra ele.
const nomes = ["ana", "ju", "leo", "paula"]

function imprimeNomes(nome) {
  console.log(nome);
}

nomes.forEach(imprimeNomes)