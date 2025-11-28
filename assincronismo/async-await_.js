/**
 * Assincronismo
 * Async - Await (São recursos que permitem a execução de operações de forma assíncrona, ou seja, o código continua
 * executando outras tarefas enquanto aguarda a conclusão de uma operação que pode ser lenta: acesso à banco de dados,
 * operações com arquivos ou chamada de rede) - São recursos do JavaScript moderno usados para simplificar a manipulação
 * de código assíncrono e trabalha com Promises de uma maneira mais intuitiva. 
 */

const fs=require("fs"); // Lida com arquivos na plataforma Node.js

async function criarArquivo(){
    let conteudo="Desenvolvimento\nExemplo de uso dos recursos async e await";
    await gravarArquivo("//home/desenvolvimento//Documentos//teste_.txt", conteudo);
}

async function gravarArquivo(path, conteudo){
    try {
        await fs.promises.writeFile(path, conteudo);
        console.log("Arquivo gravado com sucesso!");
    } catch (error) {
        console.log(error);
    }
}

console.clear();
criarArquivo();