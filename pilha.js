class Pilha {
  constructor() {
    this.dados = [];
  }

  empilhar(valor) {
    this.dados.push(valor);
  }

  desempilhar() {
    return this.dados.pop();
  }

  estaVazia() {
    return this.dados.length === 0;
  }
}

export default Pilha;
