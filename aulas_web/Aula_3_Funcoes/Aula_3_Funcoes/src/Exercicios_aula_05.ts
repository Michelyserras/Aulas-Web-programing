
console.log("Exercicio 1 - \n ")
// função para retornar uma array ordenada 
function ordenar(...lista:number[]): number[]{
    return lista.sort();
}

console.log(ordenar(2,6,5,7,8,9,1,0));

// função para calcular a media ponderada de uma array
console.log("\n Exercicio 2 - \n ")
function mediaPonderada(n1: number, n2: number, n3: number, n4: number){
let p1 = 2;
let p2 = 3;
let soma = 0;
let media = 0;
    soma = (n1*p1) + (n2*p1) + (n3*p2) + (n4*p2);
    media = soma/(p1+p1+p2+p2);
    return media;
 

}
console.log('A media ponderada é: ', mediaPonderada(6,7,4,5));

// função para validar cpf

console.log("\n \n Exercicio 3 : ")
function validaCpf(...cpf: number[]){
let soma = 0;
let resto1 = 0;
let soma2 = 0;
let resto2 = 0;

    if(cpf.length == 11){
        for(let i=0; i<9; i++){
            soma += cpf[i] * (10 - i);
        }
        console.log('\n\ta soma é igual a: ', soma);

        resto1 = (soma*10)%11;
    
        if(resto1 == cpf[cpf.length - 2]){
            console.log('\tprimeiro digito validado com sucesso: ', resto1);
        }

        for(let p=0; p<10; p++){
            soma2 += cpf[p] *(11 - p);
        }
        console.log("\ta soma2 é igual a : ", soma2);

        resto2 = (soma2*10)%11
        
    
        if(resto2 == cpf[cpf.length - 1]){
            console.log('\tO ultimo digito foi validado com sucesso:', resto2);
        }
        
        if(resto1 && resto2 == cpf.indexOf((cpf[cpf.length - 2]), cpf[cpf.length - 1])){
            
            return console.log('\tO cpf:', cpf.join(), 'é  válido!');
        }
        else
            return console.log('\tO', cpf, 'não é válido');
    }
  
 
}
console.log(validaCpf(5,2,9,9,8,2,2,4,7,2,5));
