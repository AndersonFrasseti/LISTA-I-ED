import Pilha from "./L1-Q1";

function inverter(palavra) {
  const pilha = new Pilha();

  for (var letra of palavra) {
    pilha.empilhar(letra);
  }

  var invertida = "";

  while (!pilha.estaVazia()) {
    invertida += pilha.desempilhar();
  }
  return invertida;
}

export default inverter;
