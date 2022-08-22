const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0;
//forEach = callback funcão que chama outra funcão, funciona como o for, mas é mais simples. o loop é automatico.
// notas.forEach(nota => {
//   somaDasNotas += nota 
// })

notas.forEach(function (nota) {
  somaDasNotas += nota;
})

let media = somaDasNotas / notas.length;

console.log(media)