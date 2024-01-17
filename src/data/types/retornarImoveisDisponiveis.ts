import { Imovel } from "./imovel";

export interface RetornarImoveisDisponiveis {
  quantidade: number
  menorvalor: number,
  maiorvalor: number,
  maiorarea: number,
  lista: Imovel[],
}