import { Carro } from "./Carro";
import { Cliente } from "./Cliente";
import { Moto } from "./Moto";
import { Veiculo } from "./Veiculo";

export class Agencia {
  static veiculos: Veiculo[] = [
    new Carro("ABC-1234", "Honda", "Civic", "Preto", 2015),
    new Moto("JKL-5678", "Honda", "XRE", "Vermelho", 2020),
    new Carro("GHR-5611", "Jeep", "Renegade", "Cinza", 2022),
    new Carro("RTE-1109", "Renault", "Kwid", "Branco", 2019),
  ];

  // Ao alugar um veiculo, o cliente entra pra lista
  static clientes: Cliente[] = [];

  static cadastrar(veiculo: Veiculo) {
    // Verificacao da placa ja foi feita em App.ts
    Agencia.veiculos.push(veiculo);
  }

  // Metodo alugar foi movido para Cliente.ts
  // alugar() {}

  devolver(cpf: string) {}

  static listarDisponiveis() {
    const veiculosDisponiveis = Agencia.veiculos.filter(
      (e) => e.disponibilidade === true
    );

    return veiculosDisponiveis;
  }

  static listarAlugados() {
    const veiculosAlugados = Agencia.veiculos.filter(
      (e) => e.disponibilidade === false
    );

    return veiculosAlugados;
  }

  static validaPlaca(placa: string) {
    let validade = true;

    const veiculoMesmaPlaca = Agencia.veiculos.find((e) => e.placa === placa);

    if (veiculoMesmaPlaca) validade = false;

    return validade;
  }
}
