import { Imprimivel } from "../helpers/index";

// operador rest '...' significa representar um número indefinido de argumentos como um array
export function imprimeNoConsole(...objetos: Imprimivel[]) {
    objetos.forEach(objeto => objeto.paraTexto());
}