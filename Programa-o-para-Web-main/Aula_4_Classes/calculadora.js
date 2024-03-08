"use strict";
class Calculadora {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    get getnum1() {
        return this.num1;
    }
    set setnum1(num1) {
        this.num1 = num1;
    }
    get getnum2() {
        return this.num2;
    }
    set setnum2(num2) {
        this.num2 = num2;
    }
    Soma() {
        return this.num1 + this.num2;
    }
    Subtração() {
        return this.num1 - this.num2;
    }

    multiplicação() {
        return this.num1 * this.num2;
    }

    divisão() {
        if (this.num1 == 0 || this.num2 == 0)
            return 0;
        return this.num1 / this.num2;
    }
    porcentagem() {
        let porcentagem = this.num1 / 100;
        return this.num2 * porcentagem;
    }
}
const calc = new Calculadora();

calc.setnum1 = 5;
calc.setnum2 = 2;

console.log(calc,'soma: ', calc.Soma());
console.log(calc, 'Subtração: ', calc.Subtração());
console.log(calc, 'Divisão: ', calc.divisão());
console.log(calc, 'Multiplicação', calc.multiplicação());
console.log(calc, 'Porcentagem: ', calc.porcentagem());

calc.setnum2 = 0;
console.log(calc,'\n Divisão por 0: ', calc, calc.divisão());
