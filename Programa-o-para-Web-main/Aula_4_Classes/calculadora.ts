class Calculadora{
    private num1: number;
    private num2: number;

    constructor(num1: number, num2: number){
        this.num1 = num1;
        this.num2 = num2;
    }

   get getnum1(): number{
        return this.num1;
    }

    set setnum1(num1: number){
        this.num1 = num1;
    }

    get getnum2(): number{
        return this.num2;
    }

    set setnum2(num2: number){
        this.num2 = num2;
    }

    Soma(num1: number, num2: number): number{
        return num1 + num2;
    }

    Subtração(num1: number, num2: number): number{
        return num1 - num2;
    }

    multiplicação(num1: number, num2: number): number{
        return num1 * num2;
    }

    divisão(num1: number, num2: number): number{
        if(num1 == 0 || num2 == 0)
            return 0;

        return num1/num2;
    }

    porcentagem(num1: number, num2: number): number{
      let porcentagem: number  = num1/100;

      return num2 * porcentagem;
    }
}

const calc = new Calculadora(5,2);

console.log(calc.Soma(5,2));
console.log(calc.Subtração(5,2));
console.log(calc.divisão(5,-2));
console.log(calc.divisão(5, 0));
console.log(calc.multiplicação(5,-2));
console.log(calc.porcentagem(5,2));