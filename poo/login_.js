/**
 * Fundamentos da POO (objetivo principal: representar cada elemento do mundo real para um objeto) 
 * Encapsulamento (Refinar a segurança do sistema. Limita o acesso às variáveis. Atribuir um modificador privado
 * ao atributo/variável e criar dois métodos públicos get/set para que os objetos tenham acesso à esta variável)
 */

class User{
    //atributos
    constructor(login, senha){
        this.login=login; //atributo público
        //encapsulamento
        let _senha=senha; //_ Underline torna o atributo privado
        //encapsulamento - Métodos para acessar o atributo _senha
        this.getSenha=()=>_senha; //Método para obter a senha do atributo _senha
        this.setSenha=(novaSenha)=>_senha=novaSenha; //Método para atribuir uma nova senha ao atributo
    }

    //Método ou Ação
    logar(){
        console.log("______________________________");
        console.log(`Usuário: ${this.login}`);
        console.log(`Senha: ${this.getSenha()}`);
        if (this.login==="admin" && this.getSenha()==="123456"){
            console.log("Usuário autenticado!");
        } else {
            console.log("Usuário e/ou senha inválido(s)");
        }
    }
}

/** SISTEMA **/
console.clear();
const user1=new User("admin", "1234");
user1.logar();
user1.setSenha("123456");
user1.logar();