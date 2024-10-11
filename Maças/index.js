/*As maçãs custam R$0,30 cada se forem compradas menos do que uma dúzia, e R$0,25 se forem compradas pelo menos doze.Escreva um	programa que leia o número de maçãs compradas,
calcule	 e escreva o valor total da compra. */

let precoMacaSemDuzia = 0.30;
let precoMacaComDuzia = 0.25;
let macasCompradas = parseInt(prompt('Quantas maçãs você quer comprar?'));

let valor;

if (macasCompradas >= 12) {
  valor = macasCompradas * precoMacaComDuzia;
} else {
  valor = macasCompradas * precoMacaSemDuzia;
}

console.log('O Valor da sua compra foi de: R$ ' + valor.toFixed(2));