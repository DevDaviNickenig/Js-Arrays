const nomes = ["joão", "juliana", "ana", "caio", "lara", "marjorie", "guilherme", "aline", "fabiana", "andre", "carlos", "paulo", "bia", "vivian", "isabela", "vinicius", "renan", "renata", "daisy", "camilo"]

const sala1 = nomes.slice(0, nomes.length / 2) // do 0 ao 9
const sala2 = nomes.slice(nomes.length / 2) // do 10 ao 20


console.log(nomes.length)

console.log(`Alunos da sala 1: ${sala1}`)
console.log(`Alunos da sala 1: ${sala2}`)