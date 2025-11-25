/**
 * Tutorial Node.js
 * Funções
 */

function hello(){
    console.log("Hello Function");
}

hello();
console.log(typeof(hello));

//Criar uma função atribuindo esta função à uma constante ou variável
const hello2=function(){
    console.log("Hello Function Assingned");
}
hello2();
console.log(typeof(hello2));

//Javascript moderno
//É possível simplificar a sintaxe de uma função atribuída usando arrows functions

const hello3=()=>{
    console.log("Hello Arrow Function Assingned");
}
hello3();
console.log(typeof(hello3));

//Simplificando a função hello3
const hello4=_=>console.log("Hello Arrow Function Assingned Simplify");
hello4();
console.log(typeof(hello4));

//Parâmetros
function somarS(num1, num2){
    return(console.log(num1+num2));
}
somarS(2, 3);

//Simplificando
let somarA=function(num1, num2){
    return(console.log(num1+num2));
}
somarA(2, 3);
console.log(typeof(somarA));

//Simplificando Arrow Function
let somarAF=(num1, num2)=>{
    return(console.log(num1+num2));
}
somarAF(2, 3);
console.log(typeof(somarAF));

//Simplificando Arrow Function Simplify
let somarAFS=(num1, num2)=>(console.log(num1+num2)); //Retorno Implícito
somarAFS(2, 3);
console.log(typeof(somarAFS));