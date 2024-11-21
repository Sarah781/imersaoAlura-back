import express from "express"; // Importa o framework Express.js para criar o servidor
import routes from "./src/routes/postsRoutes.js"; // Importa as rotas da aplicação

const app = express(); // Cria uma instância do aplicativo Express
routes(app); // Registra as rotas no aplicativo

app.listen(3000, () => { 
    console.log("Server listening ..."); 
}); // Inicia o servidor na porta 3000 e exibe uma mensagem no console
