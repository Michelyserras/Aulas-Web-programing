// ex 1 -

function maiorNumero(...lista: number[]):any{
    let maior = 0;
    for(let i=0; i <= lista.length; i++){
        if(maior < lista[i])
        maior = lista[i];
    }
    return maior;
}

console.log('ex 1 - ', maiorNumero(4,8,9,7,10));

// ex 2 -

function isPair(x: number): boolean{
    if(x % 2 == 0){
        return true;
    }
    else
        return false;
}

console.log('ex 2 - ', isPair(15));

// ex 3 - 

function mediaArray(...lista: number[]): number{
    let soma = 0;
    for(let i = 0; i < lista.length; i++){
        soma += lista[i];
    }
    return soma/lista.length;
}

console.log('ex 3 - ', mediaArray(1,2,3,4,5,6));

// ex 4 -

function caixaAlta(nome: string): string{
    return nome.toUpperCase();   
}
console.log('ex 4 - ', caixaAlta('michely'));

// ex 5 - 

function isPrimo(num: number): boolean{

    for(let i= 2; i <= num/2; i++){ 
        if(num % 2 == 0)
        return false;
    }
     return true;
}
console.log('ex 5 - ', isPrimo(6));

// ex 6 - 

function inverter(...lista: number[]): number[]{
   
    return lista.reverse(); 
    //a função reverse, inverte a ordem dos valores de uma array.
    //return lista.sort((a,b) => a- b); 
    /* a função sort é um metodo que serve para ordenar uma array em ordem crescente ou decrescente, 
    e para isso ela faz uma comparação entre os valores, posicionando os mesmos em ordem.
    */
}
console.log('ex 6 - ', inverter(10,50,3,2,4,6,78,100));


// ex 7 -
 function porcentagem(num: number, num2: number):number{
    let porcentagem = num2/100;
    return num + (num * porcentagem);
 }

console.log('ex 7 - ',  porcentagem(10,100)); 

// ex 8 -

function inverteString(nome: string): string{
    let nome2: string[] = nome.split("");  // o metodo split serve para transformar uma string em uma array de string
    
    let nome3: string[] = nome2.reverse(); // após isso, o metodo reverse é usado para inverter a ordem dessa array, esse método só funciona em arrays

    let nome4 = nome3.join(""); // e finalmente, o método join é usado para juntar e transformar uma array de string em uma string
    
    return nome4; // retorna a string com suas letras invertidas
}
console.log('ex 8 - ', inverteString('Michely'));

// ex 9 - 

function somaPar(...lista:number[]): number{
    let soma = 0;
    for(let i = 0; i <= lista.length; i++ ){
        if(lista[i] % 2 == 0){
            soma += lista[i];
        }
    }
    return soma;
}
console.log('ex 9 - ', somaPar(1,2,3,4,5));

// ex 10 - 

function fatorial(num: number): number{
    // 5! = 4*3*2*1|| n! = n * (n-1)
    let fat = 1; // começa em 1
    for(let i = num; i > 0; i--){ 
        /* como o fatorial é a multiplicação de todos os numeros anteriores, 
        é preciso um for para realizar essa operação, por isso, ele começa com o valor digitado, e vai decrementando em um a cada loop 
        e em seguida multiplicando e armazendo os valores na variavel fat, esse loop será repetido enquando i for maior que 0, portanto
        assim que o valor é 0 ele retorna o valor da multiplicação de todos os valores anteriores*/ 
        fat *= i;
    }

    return fat;
}
console.log('ex 10 - ', fatorial(5));