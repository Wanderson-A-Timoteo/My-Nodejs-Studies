import express, { Request, Response} from 'express';

const server = express();

// Rota estática
server.get('/', (req: Request, res: Response) => {
    res.send('Olá Mundo!')
});

// Rota dinânica
server.get('/noticia/:slug', (req: Request, res: Response) => {
    let slug: string = req.params.slug;

    res.send(`Notícia: ${slug}`);
});

// Rota dinânica com dois valores diferentes, exemplo de busca de voo
server.get('/voo/:origem-:destino', (req: Request, res: Response) => {
    let { origem, destino } = req.params;

    res.send(`Procurando voos de ${origem.toUpperCase()} para ${destino.toUpperCase()}`);
});


server.listen(5000);

console.log("Servidor executando na porta 5000.")