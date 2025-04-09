import Pilha from "../src/LISTA 1/pilha";
import binario from "../src/LISTA 1/L1-Q4";

test("saber se converteu para binario", () => {
  let num = 22;
  let resultado = binario(num);
  expect(resultado).toBe("10110");
});
