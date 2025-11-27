/**
 * Estrutura de dados
 * Array
 */

let alunosEM1 = ["Vitor", "Tania", "Pedro", "Maria", "Viviane", "Sirlene"];
console.log(typeof(alunosEM1));
// Exibindo dados de um array
console.log(alunosEM1.length);
console.log(alunosEM1);
console.table(alunosEM1);
console.log(alunosEM1[2]);
// Adicionando dados no array
alunosEM1.push("Jorge"); // adicionando dados no final do array
console.table(alunosEM1);
alunosEM1.unshift("Luiza"); // adicionando dados no início do array
console.table(alunosEM1);
alunosEM1.splice(4, 0, "Matheus", "Julia"); // (0) adicionando dados em um local específico do array
console.table(alunosEM1);
alunosEM1[12]="Leandro"; // adicionando dados determinando o seu índice em um local específico do array
console.log(alunosEM1);
console.table(alunosEM1);
// Modificando dados no array
alunosEM1[1]="Victor";
console.table(alunosEM1);
// Excluir dados no array
alunosEM1.pop();// Excluir o último item do array
console.table(alunosEM1);
alunosEM1.shift();// Excluir o primeiro item do array
console.table(alunosEM1);
alunosEM1.splice(5, 1); // (0) Excluir um dado de específico do array
console.table(alunosEM1);
alunosEM1.splice(5, 2); // (0) Excluir mais de um dado de específico do array
console.table(alunosEM1);
delete alunosEM1[3]; // (0) Excluir um dado de específico do array sem reindexar
console.table(alunosEM1);
delete alunosEM1[0]; // (0) Excluir um dado de específico do array sem reindexar
console.log(alunosEM1);
console.table(alunosEM1);
alunosEM1[0]="Teste";
console.log(alunosEM1);
console.table(alunosEM1);
// Percorrendo um array
console.clear();
let notas=[3, 8, 5, 9, 2];
console.log(notas);
console.table(notas);
// Laço for
for (let i=0; i<notas.length; i++){
    console.log(notas[i]);
}
// Laço forEach
notas.forEach((notas)=>{
    console.log(notas);
});
// Método map() Transforma os elementos de um vetor em um novo vetor
// Exemplo 1: adicionar 1 ponto à nota dos alunos
let notasAtualizadas=notas.map((na)=>{
    return na+1;
});
console.log(notas);
console.log(notasAtualizadas);
// Exemplo 2: Conversão do sistema de pontos para letras
/*
  NA - Não Atendeu (nota < 5)
  PA - Parciamente Atendido (nota entre 5 e 7)
   A - Atendeu (nota > 7)
*/
let notasConvertidas=notas.map((nc)=>{
    if (nc<5){
        return "NA";
    } else if (nc>7){
        return "A";
    } else {
        return "PA";
    }
});
console.log(notas);
console.log(notasConvertidas);

// Um array também pode ser crido como um objeto
console.clear();
let alunosEM2=new Array("Tony", "Peter", 'Thor', "Natasha");
console.log(alunosEM2);
console.table(alunosEM2);
alunosEM2.push("Steve");
console.log(alunosEM2);
console.table(alunosEM2);

// Estrutura de dados usando array e objetos
let alunosEM3=[
    {
        // Atributos objeto 1
        nome: "Bruce", 
        idade: 43,
        bolsista: false
    },
    {
        // Atributos objeto 2
        nome: "Clark", 
        idade: 45,
        bolsista: false
    },
    {
        // Atributos objeto 3
        nome: "Diana", 
        idade: 36,
        bolsista: false
    },
    {
        // Atributos objeto 4
        nome: "Barry", 
        idade: 23,
        bolsista: true
    }
];
console.log(alunosEM3);
console.table(alunosEM3);

// Uso de filtros "É bolsista"
console.log(alunosEM3.filter((b)=>{
    return b.bolsista===true;
}));
console.table(alunosEM3.filter((b)=>{
    return b.bolsista===true;
}));
// Uso de filtros "idade maior que 40 anos"
console.log(alunosEM3.filter((i)=>{
    return i.idade>40;
}));
console.table(alunosEM3.filter((i)=>{
    return i.idade>40;
}));

// Ordenar dados "nome"
alunosEM3.sort((a, z)=>{
    return(a.nome.localeCompare(z.nome));
});
console.table(alunosEM3);
// Ordenar dados "idade"
alunosEM3.sort((x, y)=>{
    return(x.idade-y.idade);
});
console.table(alunosEM3);

// Dica: Criar uma cópia do array original para exibição
let alunosOrdenados=[...alunosEM3];
// Ordenar dados "nome"
alunosOrdenados.sort((a, z)=>{
    return(a.nome.localeCompare(z.nome));
});
//console.clear();
console.table(alunosOrdenados);

// Reduzindo um array
// Sabe a média de idade dos alunos
let somaIdades=alunosEM3.reduce((ac, aluno)=>{
    return(ac+aluno.idade);
}, 0);
console.log(somaIdades);
console.log(`Media: ${somaIdades/alunosEM3.length}`);