const {
  criarCliente,
  adicionarCliente,
  atualizarCliente,
  removerCliente
} = require("./app.js");

function assert(condicao, mensagem) {
  if (!condicao) {
    throw new Error(mensagem);
  }
}

function testCriarCliente() {
  const cliente = criarCliente("Ana", "ana@email.com");
  assert(cliente.nome === "Ana", "Nome deve ser Ana");
  assert(cliente.email === "ana@email.com", "Email deve ser ana@email.com");
  assert(!!cliente.id, "Cliente deve possuir id");
}

function testAdicionarCliente() {
  const lista = [];
  const cliente = criarCliente("Bruno", "bruno@email.com");
  adicionarCliente(lista, cliente);
  assert(lista.length === 1, "Lista deve conter 1 cliente");
}

function testAtualizarCliente() {
  const cliente = { id: "1", nome: "Carlos", email: "c@email.com" };
  const lista = [cliente];
  atualizarCliente(lista, "1", { nome: "Carlos Silva" });
  assert(lista[0].nome === "Carlos Silva", "Nome deve ser atualizado");
}

function testRemoverCliente() {
  const lista = [
    { id: "1", nome: "A", email: "a@email.com" },
    { id: "2", nome: "B", email: "b@email.com" }
  ];
  const novaLista = removerCliente(lista, "1");
  assert(novaLista.length === 0, "Lista deve ficar com 1 cliente");
  assert(novaLista[0].id === "2", "Cliente restante deve ser o id 2");
}

function runTests() {
  testCriarCliente();
  testAdicionarCliente();
  testAtualizarCliente();
  testRemoverCliente();
  console.log("Todos os testes passaram.");
}

runTests();