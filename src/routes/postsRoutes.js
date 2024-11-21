import express from 'express';
import { listarPosts, postarNovoPost, uploadImagem } from '../controllers/postsController.js';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // Especifica o diretório para armazenar as imagens enviadas
      cb(null, 'uploads/'); // Substitua por seu caminho de upload desejado
    },
    filename: function (req, file, cb) {
      // Mantém o nome original do arquivo por simplicidade
      cb(null, file.originalname); // Considere usar uma estratégia de geração de nomes únicos para produção
    }
  });

const upload = multer({ dest: './uploads',storage});

const routes = (app) => {
    app.use(express.json()); // Habilita o parser JSON para lidar com requisições com corpo JSON
    app.get("/posts", listarPosts);
    app.post("/posts", postarNovoPost )
    app.post("/upload", upload.single("imagem"), uploadImagem);
}

export default routes;