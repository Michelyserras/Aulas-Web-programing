class Carro {
    private marca: string;
    private modelo: string;
    private ano: number;
    private cor: string;
  
    constructor(marca: string, modelo: string, ano: number, cor: string) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
      this.cor = cor;
    }
  
    get getmarca(): string{
      return this.getmarca;

    }

    set setmarca(marca : string){
        this.marca = marca;

    } 

    get getmodelo(): string{
      return this.getmodelo;

    }

    set setmodelo(modelo : string){
        this.modelo = modelo;

    } 

    get getano(): number{
      return this.getano;

    }

    set setano(ano : number){
        this.ano = ano;

    } 

    get getcor(): string{
      return this.getcor;

    }

    set setcor(cor : string){
        this.cor = cor;

    } 
    
    calcularIdade(anoAtual: number): number{
      return anoAtual - this.ano;
    };
 
    exibirInfo(): void {
      console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor}`);
    }
  }
  
   
  const meuCarro = new Carro("Toyota", "Corolla", 2020, "Prata");

  const meu2Carro = new Carro("Fiat", "Mobi", 2018, "Preto" );
  
  console.log("Exercicio 1 - \n ");
  meuCarro.exibirInfo();
  meu2Carro.exibirInfo();
  console.log("A idade do seu carro é: ", meu2Carro.calcularIdade(2024));
    
