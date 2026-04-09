const clientes = [];

function criarCliente(nome, email) {
  return {
    id: Date.now().toString(),
    nome,
    email
  };
}

function adicionarCliente(lista, cliente) {
  lista.push(cliente);
  return lista;
}

function renderizarClientes() {
  const ul = document.getElementById("lista-clientes");
  ul.innerHTML = "";

  clientes.forEach(cliente => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${cliente.nome} - ${cliente.email}</span>
      <div class="acoes">
        <button onclick="prepararEdicao('${cliente.id}')">Editar</button>
        <button onclick="excluirCliente('${cliente.id}')">Excluir</button>
      </div>
    `;
    ul.appendChild(li);
  });
}

document.getElementById("cliente-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const id = document.getElementById("cliente-id").value;
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;

  
  const cliente = criarCliente(nome, email);
  adicionarCliente(clientes, cliente);
  

  this.reset();
  document.getElementById("cliente-id").value = "";
  renderizarClientes();
});