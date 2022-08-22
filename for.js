// for é um laço de repetição, é um looping.
//i < numeros.length enquanto essa condiçao for verdadeira o loop irá continuar, cuidado com looping infinito.

const numeros = [100, 200, 300, 400, 500, 600]

for (let i = 0; i < numeros.length; i++) { // numeros.length é 6, i++ = i + 1
  console.log(i, numeros[i])
}