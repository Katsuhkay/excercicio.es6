// 1. Criando o array de objetos (alunos e notas)
const alunos = [
  { nome: "João", nota: 5 },
  { nome: "Maria", nota: 8 },
  { nome: "Pedro", nota: 6 },
  { nome: "Ana", nota: 4 },
  { nome: "Carlos", nota: 7 }
];

// 2. Função que retorna alunos com nota >= 6
function filtrarAprovados(listaDeAlunos) {
  return listaDeAlunos.filter(aluno => aluno.nota >= 6);
}

// 3. Testando a função
const aprovados = filtrarAprovados(alunos);
console.log(aprovados);