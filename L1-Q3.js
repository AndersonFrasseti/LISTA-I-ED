import Pilha from "../LISTA 1/pilha";

function troca(pilha) {
  if (pilha.estaVazia() || pilha.topo === 0) return;

  const aux = new Pilha();

  const topo = pilha.desempilhar();

  while (!pilha.estaVazia()) {
    aux.empilhar(pilha.desempilhar());
  }

  const base = aux.desempilhar();

  pilha.empilhar(topo);
  while (!aux.estaVazia()) {
    pilha.empilhar(aux.desempilhar());
  }

  pilha.empilhar(base);
}

export default troca;
