import Pilha from "../src/LISTA 1/pilha";
import troca from "../src/LISTA 1/L1-Q3";

test("troca o topo com a base da pilha", () => {
  const p = new Pilha();
  p.empilhar(1);
  p.empilhar(2);
  p.empilhar(3);

  troca(p);

  expect(p.desempilhar()).toBe(1);
  expect(p.desempilhar()).toBe(2);
  expect(p.desempilhar()).toBe(3);
  expect(p.estaVazia()).toBe(true);
});
