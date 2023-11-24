import Veiculo from "./Veiculo";

export default class Moto extends Veiculo {
  public tipo: string = "A" //Moto: CNH A
  constructor(
    public placa: string,
    public marca: string,
    public modelo: string,
    public cor: string,
    public ano: number
  ) {
    super(placa, marca, modelo, cor, ano);
  }
}
