import rl from "readline-sync";
import Agencia from "./models/Agencia";
import Moto from "./models/Moto";
import Carro from "./models/Carro";
import Cliente from "./models/Cliente";

function calcularValorDoAluguel(diasDeAluguel: string, cnhCliente: string): number {
  let valoraluguel = 0
  if(cnhCliente === 'a' || cnhCliente === 'A'){
    valoraluguel = (Number(diasDeAluguel) * 200) * 1.05;
    return valoraluguel;
} else if(cnhCliente === 'b' || cnhCliente === 'B'){
  valoraluguel = (Number(diasDeAluguel) * 400) * 1.10;
    return valoraluguel;
};
return valoraluguel;
}

let menuOpcao: string;

do {
  menuOpcao = rl.question(`
LOCADORA DE VEICULOS - CODELIVERY

Selecione a opcao:
1. Cadastrar veiculo
2. Alugar veiculo
3. Devolver veiculo
4. Listar veiculos disponiveis
5. Listar veiculos alugados
6. Sair

`);

  switch (menuOpcao) {
    case "1":
      // Cadastro de veiculo
      let veiculoTipo: string;

      console.log("CADASTRO DE VEICULO");

      do {
        veiculoTipo = rl.question(
          "Insira A para cadastrar moto, ou B para cadastrar carro: "
        );
      } while (veiculoTipo !== "A" && veiculoTipo !== "B" && veiculoTipo !== "a" && veiculoTipo !== "b");

      const placa = rl.question("Placa: ");

      if (!Agencia.validaPlaca(placa)) {
        console.log(
          "Operacao cancelada: Ja existe um veiculo com essa placa no sistema."
        );
        break;
      }

      const marca = rl.question("Marca: ");
      const modelo = rl.question("Modelo: ");
      const cor = rl.question("Cor: ");
      const ano = rl.question("Ano: ");

      if (veiculoTipo === "A")
        Agencia.cadastrar(new Moto(placa, marca, modelo, cor, Number(ano)));
      else Agencia.cadastrar(new Carro(placa, marca, modelo, cor, Number(ano)));

      break;
    case "2":
      // Aluguel de veiculo
      console.log("ALUGUEL DE VEICULO");
      console.log("Insira os dados do cliente:");

      const nome = rl.question("Nome: ");
      const cpf = rl.question("CPF: ");
      let cnh: string;
      do {
        cnh = rl.question(
          "Insira A para CNH de moto, ou B para CNH de carro: "
        ).toUpperCase();
      } while (cnh !== "A" && cnh !== "B");

      let cliente = new Cliente(nome, cpf, cnh);

      if(!Agencia.verificarClienteCadastrado(cliente.cpf)){

      if (cnh === "A") {
        const motosDisponiveis = Agencia.listarDisponiveis().filter(
          (e) => e.tipo === "A"
        );
        console.log("LISTA DE MOTOS DISPONIVEIS:");
        motosDisponiveis.forEach((e, i) =>
          console.log(`${++i}. Moto: ${e.marca} ${e.modelo} (${e.placa})`)
        );
        let diasDeAluguel = rl.question('Quantos dias você ficará com o veículo?');
        console.log(`O valor total do aluguel será R$${calcularValorDoAluguel(diasDeAluguel, cnh).toFixed(2)}`);
      } else {
        const carrosDisponiveis = Agencia.listarDisponiveis().filter(
          (e) => e.tipo === "B"
        );
        console.log("LISTA DE CARROS DISPONIVEIS:");
        carrosDisponiveis.forEach((e, i) =>
          console.log(`${++i}. Carro: ${e.marca} ${e.modelo} (${e.placa})`)
        );
        let diasDeAluguel = rl.question('Quantos dias voce ficara com o veiculo?');

        console.log(`O valor total do aluguel será R$${calcularValorDoAluguel(diasDeAluguel, cnh).toFixed(2)}`);
      }

      
      const placaEscolhida = rl.question("Escolha o veiculo pela placa: ");

      cliente.alugar(placaEscolhida);
    } else{
        console.log(`Cliente de CPF: ${cliente.cpf} já está cadastrado!`);
        
      }

      break;
    case "3":
      // Devolver veiculo
      console.log("DEVOLUCAO DE VEICULO");
      console.log("Insira o CPF do cliente:");

      const cpfCadastrado = rl.question("CPF: ");

      if(Agencia.verificarClienteCadastrado(cpfCadastrado)){
        let cliente = Agencia.encontrarCliente(cpfCadastrado);
        cliente[0].entregar();
      }else {
        console.log(`O CPF ${cpfCadastrado} é inválido! Entre com um CPF cadastrado.`);
        
      }

      break;
    case "4":
      // Listar veiculos disponiveis
      const veiculosDisponiveis = Agencia.listarDisponiveis();

      console.log("LISTA DE VEICULOS DISPONIVEIS:");
      veiculosDisponiveis.forEach((e, i) =>
        console.log(
          `${++i}. ${e.tipo === "A" ? "Moto" : "Carro"}: ${e.marca} ${
            e.modelo
          } (${e.placa})`
        )
      );

      break;
    case "5":
      // Listar veiculos alugados
      const veiculosAlugados = Agencia.listarAlugados();

      console.log("LISTA DE VEICULOS ALUGADOS:");
      veiculosAlugados.forEach((e, i) =>
        console.log(
          `${++i}. ${e.tipo === "A" ? "Moto" : "Carro"}: ${e.marca} ${
            e.modelo
          } (${e.placa})`
        )
      );
      break;
    case "6": {
      console.log("Fim do programa");
      break;
    }
    default: {
      console.log("Opção inválida");
      break;
    }
  }
} while (menuOpcao !== "6");
