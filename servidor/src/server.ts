import express, { Request, Response} from 'express';

const server = express();

server.get('/', (req: Request, res: Response) => {
    res.send('Olá Mundo!')
});

server.listen(5000);

console.log("Servidor executando na porta 5000.")