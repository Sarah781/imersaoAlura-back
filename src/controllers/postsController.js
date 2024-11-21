import {getTodosPosts, criarPost} from "../models/postsModel.js";
import fs from 'fs';

export async function listarPosts(req, res) { // Define uma rota GET para o endpoint "/posts"
    const posts = await getTodosPosts(); // Chama a função para obter todos os posts
    res.status(200).json(posts); // Envia uma resposta com status 200 (OK) e os posts em formato JSON
  }

export async function postarNovoPost(req, res) {
  const novoPost =req.body;
  try {
    const postCriado = await criarPost(novoPost);
    res.status(200).json(postCriado);
  }
  catch (erro){
    console.error(erro.message);
    res.status(500).json({erro: "Erro ao criar post"});
  }
}

export async function uploadImagem(req, res) {
  const novoPost ={
    descricao: "",
    imgUrl:req.file.originalname,
    alt: "",
  }
  try {
    const postCriado = await criarPost(novoPost);
    const imgAtualizada = `uploads/${postCriado.insertedId}.png`;
    fs.renameSync(req.file.path, imgAtualizada);
    res.status(200).json(postCriado);
  }
  catch (erro){
    console.error(erro.message);
    res.status(500).json({erro: "Erro ao criar post"});
  }
}