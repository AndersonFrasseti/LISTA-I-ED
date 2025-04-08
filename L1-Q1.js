class Pilha {
  constructor() {
    this.itens = [];
  }

  empilhar(fruta) {
    if (typeof fruta === "string") {
      this.itens.push(fruta);
    } else {
      console.log("erro");
    }
  }

  desempilhar() {
    return this.itens.pop();
  }

  topo() {
    return this.itens[this.itens.length - 1];
  }

  estaVazia() {
    return this.itens.length === 0;
  }

  mostrar() {
    return this.itens;
  }
}

export default Pilha;
