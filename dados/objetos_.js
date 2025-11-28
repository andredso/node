/**
 * Estrutura de dados
 * Objetos
 */

const funcionario1={};
//console.log(typeof(funcionario1));
//adicionar dados a estrutura
funcionario1.nome="Desenvolvimento";
funcionario1.cargo="Dev";
funcionario1.email="corte1@neobrasil.com.br";
funcionario1.salario=8000;
funcionario1.insta="@neobrasil"

//listar os dados da estrutura
console.log(funcionario1);
console.log(funcionario1.cargo);

//modificar os dados da estrutura
funcionario1.nome="Corte1";
console.log(funcionario1);

//excluir dados da estrutura
delete funcionario1.insta;
console.log(funcionario1);

const funcionario2={
    nome:"Bruce Wayne",
    cargo:"CEO",
    email:"batman@email.com",
    salario: 400000
}
console.log(funcionario2);

const endereco1={
    logradouro:"Bat Caverna",
    cidade:"Gothan City",
    estado:"Nova Jersey"
}
console.log(endereco1);

const funcionario3={
    nome:"Alfred Pennywort",
    cargo:"Mordomo",
    email:"alfred@email.com",
    salario: 20000,
    ...endereco1 //... spread operator
}
console.log(funcionario3);

const funcionario4={
    nome:"Dick Grayson",
    cargo:"Acrobata",
    email:"robin@email.com",
    salario: 2000,
    ...endereco1 //... spread operator
}
console.log(funcionario4);

const funcionario5={
    nome:"Tony Stark",
    cargo:"Engenheiro",
    email:"ironman@email.com",
    salario:375000,
    armadura: { //Sub objeto 
        versao:"Mark II",
        ano: 2010,
        reator:"Arc 01"
    },
    suitUp:()=>{ //Função anônima
        console.log("🤖")
    }
}
console.log(funcionario5);
console.log(funcionario5.armadura.versao);
funcionario5.suitUp();