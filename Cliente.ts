import { Agencia } from "./Agencia";
import { Veiculo } from "./Veiculo";

export class Cliente {
  public veiculo: Veiculo | null = null;
  constructor(public nome: string, public cpf: string, public cnh: string) {}

  alugar(placaEscolhida: string) {
    const veiculoEscolhido = Agencia.listarDisponiveis().find(
      (e) => e.placa === placaEscolhida
    );

    if (veiculoEscolhido) {
      this.veiculo = veiculoEscolhido;
      veiculoEscolhido.alterarDisponibilidade();
    }
  }
}
