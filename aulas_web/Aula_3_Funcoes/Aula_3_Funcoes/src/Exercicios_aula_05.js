console.log("Exercicio 1 - \n ");
// função para retornar uma array ordenada 
function ordenar() {
    var lista = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        lista[_i] = arguments[_i];
    }
    return lista.sort();
}
console.log(ordenar(2, 6, 5, 7, 8, 9, 1, 0));
// função para calcular a media ponderada de uma array
console.log("\n Exercicio 2 - \n ");
function mediaPonderada(n1, n2, n3, n4) {
    var p1 = 2;
    var p2 = 3;
    var soma = 0;
    var media = 0;
    soma = (n1 * p1) + (n2 * p1) + (n3 * p2) + (n4 * p2);
    media = soma / (p1 + p1 + p2 + p2);
    return media;
}
console.log('A media ponderada é: ', mediaPonderada(6, 7, 4, 5));
// função para validar cpf
console.log("\n \n Exercicio 3 : ");
function validaCpf() {
    var cpf = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        cpf[_i] = arguments[_i];
    }
    var soma = 0;
    var resto1 = 0;
    var soma2 = 0;
    var resto2 = 0;
    if (cpf.length == 11) {
        for (var i = 0; i < 9; i++) {
            soma += cpf[i] * (10 - i);
        }
        console.log('\n\ta soma é igual a: ', soma);
        resto1 = (soma * 10) % 11;
        if (resto1 == cpf[cpf.length - 2]) {
            console.log('\tprimeiro digito validado com sucesso: ', resto1);
        }
        for (var p = 0; p < 10; p++) {
            soma2 += cpf[p] * (11 - p);
        }
        console.log("\ta soma2 é igual a : ", soma2);
        resto2 = (soma2 * 10) % 11;
        if (resto2 == cpf[cpf.length - 1]) {
            console.log('\tO ultimo digito foi validado com sucesso:', resto2);
        }
        if (resto1 && resto2 == cpf.indexOf((cpf[cpf.length - 2]), cpf[cpf.length - 1])) {
            return console.log('\tO cpf:', cpf.join(), 'é  válido!');
        }
        else
            return console.log('\tO', cpf, 'não é válido');
    }
    // index of serve para localizar um determinado valor dentro de uma array, é possivel passar um parametro para ser encontrado e um ponto da onde essa busca deve ser iniciada
}
console.log(validaCpf(5, 2, 9, 9, 8, 2, 2, 4, 7, 2, 5));
