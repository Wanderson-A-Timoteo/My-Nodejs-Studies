import express, { Request, Response } from 'express';
import path from 'path';
import mainRoutes from './routes/index';
import painelRoutes from './routes/painel';


const server = express();

server.use(mainRoutes);

// Torna a pasta public acessível para todos usuarios de forma estatica
server.use(express.static(path.join(__dirname, '../public')));

server.use('/painel', painelRoutes);

server.use((req: Request, res: Response) => {
    res.status(404).send('Página não encontrada!')
});

server.listen(8000);

console.log("Servidor executando na porta 8000.")