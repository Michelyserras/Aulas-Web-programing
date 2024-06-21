export function ReverterSentenca(palavra: any,  callback: (param: any)=> void):void{
    const op:string = palavra.split('').reverse().join('');
    const resultado = callback(op);

    console.log(resultado);
}

export function exibeFrase(frase:string): string{
    return `A INVERSÃO DA SENTENÇA RESULTOU EM: ${frase.toLocaleUpperCase()}`;
}