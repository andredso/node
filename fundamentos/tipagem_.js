/**
 * Tutorial Node.js
 * Tipagem dinâmica
 */

console.log("____________________________________________________________ string");
let nome = "Desenvolvimento";
console.log(typeof(nome));
console.log(nome);
console.log(nome.replace("Desenvolvimento", "Desenv"));
//dica .replace(",", ".");
//concatenação
console.log("Nome: " + nome);
console.log(`Nome: ${nome}`); //concatenar sempre desta forma
console.log("___________________________________________________________ números");
let peso = 61;
let altura = 1.65;
console.log(typeof(peso));
console.log(typeof(altura));
console.log(Number.isInteger(peso));
console.log(Number.isInteger(altura));
let imc = peso / (altura * altura);
console.log(`IMC: ${imc.toFixed(2)}`); //formata o resultado em duas casas decimais
//Atenção!
console.log(10 / 0); //No javascript, ao dividir um número por zero o resultado é infinito
console.log("3" + 2); //Concatena o 3 com o 2
console.log("3" - 2); //Realiza a operação matemática subtraindo 2 de 3
console.log("3" * 2); //Realiza a operação matemática multiplicando 2 de 3
console.log("3" / 2); //Realiza a operação matemática dividindo 2 de 3
console.log("3x" - 2); //Resultado NaN (Não existe na matemática)
console.log(NaN === NaN);
console.log(0.5 + 0.5);
console.log(0.1 + 0.2);
console.log(0.1 + 0.7); //O javascript tenta adaptar o resultado conforme a operação matemática realizada
console.log("_________________________________________________________ booleanos");
let sw = true;
console.log(`Chave: ${sw}`);
let lamp = !1; //1 é verdadeiro // ! é o operador NOT
console.log(typeof(lamp));
console.log(`Lâmpada: ${lamp}`);
console.log(sw && "Lâmpada Acesa"); //&& operador AND