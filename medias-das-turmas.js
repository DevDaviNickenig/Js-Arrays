const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function mediaSala(notasDaSala) {
  const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum, 0) // 0 zero é io valor inicial da soma dos itns do array.
  return somaDasNotas / notasDaSala.length
}

console.log(`Média da sala de JavaScript ${mediaSala(salaJS)}`)
console.log(`Média da sala de Java ${mediaSala(salaJava)}`)
console.log(`Média da sala de Python ${mediaSala(salaPython)}`)

//notasDaSala vai ser substituida pelas const da salas.

//reduce precisa ter 2 parametros um é o acumulador e o outro é o atual.

const notas = [10, 6.5, 8, 7.5]

const media = notas.reduce((acum, atual) => atual + acum, 0) / notas.length

console.log(media)