import getTodosPosts from "../models/postsModel.js";

export async function listarPosts(req, res) { // Define uma rota GET para o endpoint "/posts"
    const posts = await getTodosPosts(); // Chama a função para obter todos os posts
    res.status(200).json(posts); // Envia uma resposta com status 200 (OK) e os posts em formato JSON
  }
