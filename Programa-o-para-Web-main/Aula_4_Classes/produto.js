"use strict";
class produto {
    constructor(nome, preco, qtdEmEstoque) {
        this.nome = nome;
        this.preco = preco;
        this.qtdEmEstoque = qtdEmEstoque;
    }
    get getnome() {
        return this.nome;
    }
    set setnome(nome) {
        this.nome = nome;
    }
    get getnpreco() {
        return this.preco;
    }
    set setpreco(preco) {
        this.preco = preco;
    }
    get getqtdEmEstoque() {
        return this.qtdEmEstoque;
    }
    set setqtdEmEstoque(qtdEmEstoque) {
        this.qtdEmEstoque = qtdEmEstoque;
    }
    calcularValorTotalEmEstoque() {
        return this.preco * this.qtdEmEstoque;
    }
    reporEstoque(quantidade) {
        this.qtdEmEstoque += quantidade;
    }
    venderProduto(quantidade) {
        if (quantidade) {
            return this.qtdEmEstoque -= quantidade;
        }
        else if (quantidade < this.qtdEmEstoque)
            return 'Estoque vazio';
    }
}
const p1 = new produto("Bombom", 4.99, 5);
console.log('O valor total em estoque é : ', p1.calcularValorTotalEmEstoque());
p1.reporEstoque(3);
console.log(p1);
console.log("\n");
console.log('Venda de 3 produtos, restam em estoque: ', p1.venderProduto(3));
console.log(p1);
console.log("\n");
console.log('Venda de 5 produtos, restam em estoque: ', p1.venderProduto(5));
console.log(p1);
console.log("\n");
p1.reporEstoque(5);
console.log(p1);
console.log('Venda de 2 produtos, restam em estoque: ', p1.venderProduto(2));
console.log(p1);
p1.reporEstoque(10);
console.log("\n");
console.log(p1);
console.log("O valor total em estoque é: ", p1.calcularValorTotalEmEstoque());
console.log('Venda de 13 produtos, restam em estoque: ', p1.venderProduto(13));
console.log(p1);
console.log("\n");
