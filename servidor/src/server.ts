import express, { Request, Response } from 'express';
import { request } from 'http';
import mainRoutes from './routes/index';
import painelRoutes from './routes/painel';


const server = express();

server.use(mainRoutes);

server.use('/painel', painelRoutes);

server.use((req: Request, res: Response) => {
    res.status(404).send('Página não encontrada!')
});

server.listen(8000);

console.log("Servidor executando na porta 8000.")