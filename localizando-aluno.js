const alunos = ['joao', 'juliana', 'caio', 'ana']
const mediasDosAlunos = [10, 7, 9, 6]

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

//includes = booleano
//indexOf = numero

//console.log(`${listaDeNotasEAlunos[0][0]}, a sua média é ${listaDeNotasEAlunos[1][0]}`) // o primeiro [] é referente ao array [alunos, mediasDosAlunos].

const exibeNomeNota = (nomeDoAluno) => {
  if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
    let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
    return listaDeNotasEAlunos[0][indice] + ' , sua média é ' + listaDeNotasEAlunos[1][indice]
  } else {
    return "Aluno Não cadastrado"
  }
}

console.log(exibeNomeNota("js"))