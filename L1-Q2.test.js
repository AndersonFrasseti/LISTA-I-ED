import Pilhas from "../src/LISTA 1/L1-Q2";

let p;

beforeEach(() => {
  p = new Pilhas();
});

test("inicializa pilhas vazias", () => {
  expect(p.vaziaA()).toBe(true);
  expect(p.vaziaB()).toBe(true);
});

test("empilha elementos na Pilha A", () => {
  p.empilhaA(1);
  expect(p.vaziaA()).toBe(false);
  expect(p.desempilhaA()).toBe(1);
  expect(p.vaziaA()).toBe(true);
});

test("empilha elementos na Pilha B", () => {
  p.empilhaB(10);
  expect(p.vaziaB()).toBe(false);
  expect(p.desempilhaB()).toBe(10);
  expect(p.vaziaB()).toBe(true);
});

test("desempilha Pilha A", () => {
  p.empilhaA(1);
  p.empilhaA(2);
  expect(p.desempilhaA()).toBe(2);
  expect(p.desempilhaA()).toBe(1);
  expect(p.desempilhaA()).toBeUndefined();
});

test("desempilha Pilha B", () => {
  p.empilhaB(10);
  p.empilhaB(9);
  expect(p.desempilhaB()).toBe(9);
  expect(p.desempilhaB()).toBe(10);
  expect(p.desempilhaB()).toBeUndefined();
});

test("verifica pilha cheia quando Pilha A e Pilha B se encontram", () => {
  const pilhasPequena = new Pilhas(3);
  pilhasPequena.empilhaA(1);
  pilhasPequena.empilhaB(3);
  pilhasPequena.empilhaA(2);
  expect(pilhasPequena.desempilhaA()).toBe(2);
  expect(pilhasPequena.desempilhaA()).toBe(1);
  expect(pilhasPequena.desempilhaB()).toBe(3);
  expect(pilhasPequena.vaziaA()).toBe(true);
  expect(pilhasPequena.vaziaB()).toBe(true);
});
