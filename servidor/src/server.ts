import express from 'express';
import mainRoutes from './routes/index';
import painelRoutes from './routes/painel';


const server = express();

server.use(mainRoutes);

server.use('/painel', painelRoutes);

server.listen(8000);

console.log("Servidor executando na porta 8000.")