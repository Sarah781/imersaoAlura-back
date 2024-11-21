import conectarAoBanco from "../config/dbConfig.js"; // Importa a função para conectar ao banco de dados

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO); // Conecta ao banco de dados usando a string de conexão do ambiente

export async function getTodosPosts() { // Função assíncrona para obter todos os posts do banco de dados
    const db = conexao.db("imersao-back"); // Seleciona o banco de dados "imersao-back"
    const colecao = db.collection("posts"); // Seleciona a coleção "posts"
    return colecao.find().toArray(); // Executa uma consulta para encontrar todos os posts e retorna os resultados como um array
  }

export async function criarPost(novoPost) {
  const db = conexao.db("imersao-back"); // Seleciona o banco de dados "imersao-back"
  const colecao = db.collection("posts"); // Seleciona a coleção "posts"
  return colecao.insertOne(novoPost); // Insere um novo post na coleção e retorna o resultado da operação

}