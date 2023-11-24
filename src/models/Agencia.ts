import Carro from "./Carro";
import Cliente from "./Cliente";
import Moto from "./Moto";
import Veiculo from "./Veiculo";

export default class Agencia {
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

  static verificarClienteCadastrado(cpfcliente: string){
    return this.clientes.some((cliente) => cliente.cpf === cpfcliente)
  }
    
  
  static cadastrarCliente({nomeDoCliente, cpfDoCliente, cnhDoCliente}: Cliente){
    if(!this.verificarClienteCadastrado(cpfDoCliente))
    this.clientes.push({nome: nomeDoCliente, cpf: cpfDoCliente, cnh: cnhDoCliente})
  }

  static deletarCliente(cpfcliente: string){
    if(this.verificarClienteCadastrado(cpfcliente)){
    this.clientes.splice(clientes.findIndex(cliente => cliente.cpf === cpfcliente), 1)} return
  }

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
