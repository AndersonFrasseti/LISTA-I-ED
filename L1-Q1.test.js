import Pilha from "../src/LISTA 1/L1-Q1.js";
import inverter from "../src/LISTA 1/Inverte.js";
let p;

beforeEach(() => {
  p = new Pilha();
});

test("empilhar corretamente", () => {
  p.empilhar("abacaxi");
  p.empilhar("banana");
  expect(p.mostrar()).toEqual(["abacaxi", "banana"]);
});

test("topo, retorna o ultimo item", () => {
  p.empilhar("uva");
  expect(p.topo()).toBe("uva");
});

test("desempilhar", () => {
  p.empilhar("banana");
  expect(p.desempilhar()).toBe("banana");
  expect(p.estaVazia()).toEqual(true);
});

test("saber se esta vazia", () => {
  expect(p.estaVazia()).toBe(true);
});

test("retornar a palavra ao contrario", () => {
  expect(inverter("abacaxi")).toBe("ixacaba");
});
