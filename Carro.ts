import { Veiculo } from "./Veiculo";

export class Carro extends Veiculo {
  public tipo: string = "B" //Carro: CNH B
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
