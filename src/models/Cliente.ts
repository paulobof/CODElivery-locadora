import Agencia from "./Agencia";
import Veiculo from "./Veiculo";

export default class Cliente {
  public veiculo: Veiculo | null = null;
  constructor(public nome: string, public cpf: string, public cnh: string) {}

  alugar(this: Cliente, placaEscolhida: string) {
    const veiculoEscolhido = Agencia.listarDisponiveis().find(
      (e) => e.placa === placaEscolhida
    );

    if (veiculoEscolhido) {
      this.veiculo = veiculoEscolhido;

      veiculoEscolhido.alterarDisponibilidade();
      Agencia.cadastrarCliente(this)
      console.log(this);

      // alterar lógica de validação.
      
      console.log("VEICULO ALUGADO COM SUCESSO!!!");
    } else {
      console.log("ERRO - NÃO FOI POSSIVEL ALUGAR O VEICULO!!!");
    }
  }

  entregar(this: Cliente){
    if(this.veiculo !== null){
      this.veiculo.alterarDisponibilidade()
      Agencia.deletarCliente(this.cpf)
      console.log('VEICULO ENTREGUE COM SUCESSO!!!');
      
    } else {
      console.log('NÃO HÁ VEICULO PARA ENTREGAR!');
      
    }
  }
}

