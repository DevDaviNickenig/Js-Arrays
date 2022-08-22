const nomes = ["Ana", "Marcos", "Maria", "Mauro"]
const notas = [7, 4.5, 8, 7.5]
//filter tb precisa de uma funcão, o primeiro item, o aluno é uma funcão. é um booleano, trabalha com true ou false.

const reprovados = nomes.filter((aluno, indice) => notas[indice] < 5) // aluno pode ser subtituido por _ para o js entender que é um callback.

console.log(`reprovados: ${reprovados}`)