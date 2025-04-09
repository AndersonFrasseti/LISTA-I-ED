import res from "express/lib/response";
import Pilha from "../LISTA 1/pilha";
import { DECIMAL } from "sequelize";

function binario(num) {
  let v = new Pilha();
  let bin = "";

  while (num > 0) {
    const resto = num % 2;
    v.empilhar(resto);
    num = Math.floor(num / 2);
  }

  while (!v.estaVazia()) bin += v.desempilhar();

  return bin;
}

export default binario;
