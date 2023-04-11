const usuarios = require("./moduloUsuarios")

// function autenticar(email, senha) {
//     const user = usuarios.find((user) => user.email === email && user.senha === senha);
//     if(user){
//         return "Seja bem-vindo!";
//     }else{
//         return "Usuário não existe";
//     }
// }


// Abaixo é a solução do Gab, que verifica a senha caso o email esteja correto e a senha não.
function autenticar(email, senha) {
    const user = usuarios.find((user) => user.email === email);
    if (!user) {
        return "Usuário não existe";
    }else{
        return (user.senha === senha) ? "Usuário logado com sucesso!" : "Senha incorreta";
    }
    
    }


module.exports = autenticar;

