import express from 'express';
import { listarPosts } from '../controllers/postsController.js';

const routes = (app) => {
    app.use(express.json()); // Habilita o parser JSON para lidar com requisições com corpo JSON
    app.get("/posts", listarPosts);
}

export default routes;