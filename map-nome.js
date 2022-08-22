let nomes = ["ana Julia", "Caio vinicius", "BIA SiLva"]
//O Map vai percorrer is indices do array e vai mudar => tudo pra upercase.
const nomesAtualizandos = nomes.map(nome => nome.toUpperCase()); // ANA JULIA CAIO VINICIUS BIA SILVA

console.log(nomesAtualizandos);

const nome = "Alura";
let nomeMaiusculas = "";

for (let i = 0; i < nome.length; i++) {
  nomeMaiusculas += nome[i].toUpperCase()
}
console.log(nomeMaiusculas) //ALURA

const nomedoCurso = "Fundamentos de JS";
const nomeDaPlataforma = " Alura"

const nomeCompleto = nomedoCurso.concat(nomeDaPlataforma)
console.log(nomeCompleto)  //Fundamentos de JS Alura