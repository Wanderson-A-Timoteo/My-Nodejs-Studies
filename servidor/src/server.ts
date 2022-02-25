import express from 'express';
import mainRoutes from './routes/index';

const server = express();

server.use(mainRoutes);

server.listen(8000);

console.log("Servidor executando na porta 8000.")