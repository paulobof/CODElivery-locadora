export abstract class Veiculo {
  public disponibilidade = true;
  public tipo: string = "";

  constructor(
    public placa: string,
    public marca: string,
    public modelo: string,
    public cor: string,
    public ano: number
  ) {}

  alterarDisponibilidade(){
    this.disponibilidade = !this.disponibilidade;
  }
}
