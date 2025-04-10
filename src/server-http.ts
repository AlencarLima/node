import * as http from 'http';
import * as url from 'url';

const port: number = 3000

const server: http.Server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    const parsetUrl: url.UrlWithParsedQuery = url.parse(req.url || '', true);
    const path: string = parsetUrl.pathname || '';

    if (path === '/') {
        res.end('<h1>Home Page</h1>')
    }
    else if (path === '/about') {
        res.end('<h1>About Page</h1>')
    }
    else if (path === '/contact') {
        res.end('<h1>Contact Page</h1>')
    } else {
        res.end('<h1>404: page not found</h1>')
    }
})

server.listen(port, () => {
    console.log(`Server listening at port ${port}`)
});