class Pilhas {
  constructor(tam = 10) {
    this.v = new Array[tam]();
    this.topoA = -1;
    this.topoB = tam;
    this.tam = tam;
  }

  vaziaA() {
    return this.topoA === -1;
  }

  vaziaB() {
    return this.topoB === this.tam;
  }

  empilhaA(elemento) {
    if (this.topoA + 1 === this.topoB) {
      console.log("a pilha esta cheias");
      return;
    } else {
      this.topoA++;
      this.v[this.topoA] = elemento;
    }
  }

  empilhaB(elemento) {
    if (this.topoB - 1 === this.topoA) {
      console.log("a pilha esta cheia");
      return;
    } else {
      this.topoB--;
      this.v[this.topoB] = elemento;
    }
  }

  desempilhaA() {
    if (this.vaziaA() === true) {
      console.log("a pilha esta vazia");
      return;
    } else {
      var valor = this.v[this.topoA];
      this.topoA--;
      return valor;
    }
  }

  desempilhaB() {
    if (this.vaziaB() === true) {
      console.log("a pilha esta vazia");
      return;
    } else {
      var valor = this.v[this.topoB];
      this.topoB++;
      return valor;
    }
  }
}
