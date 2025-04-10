import express, { Request, Response, NextFunction } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.end('<h1>Welcome to my Express server</h1>')
});

// construção incremental da resposta
app.get('/incremental', (req, res) => {
    res.status(200)
    res.setHeader('Content-Type', 'text/html');
    res.write('<p>First paragraph</p>');
    res.write('<p>Second paragraph</p>');
    res.write('<p>Third paragraph</p>');
    res.end();
});

// error status code
app.get('/internal-error', (req, res) => {
    res.status(500).send('Internal server error')
})

// dangling route
app.get('/dangling', (req, res) => {
    res.write('Teste')
    console.log('Rota pendente');
})

app.get('/route1', (req, res) => {
    res.send('First match');
})

app.get('/route1', (req, res) => {
    res.send('Second match');
})

// middleware chaining
app.get('/route2', (req, res, next: NextFunction) => {
    res.write('First match\n');
    next();
})

app.get('/route2', (req, res, next) => {
    res.write('Second match\n');
    next()
})

app.get('/route2', (req, res, next) => {
    res.end('Third match');
})

app.listen(port, () => {
    console.log("Server started at", port);
});