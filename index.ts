import Jimp from 'jimp';
import { httpServer } from './src/http_server/index';
import { createWebSocketStream, WebSocketServer } from 'ws';
import { validateArgs } from './validateArgs';

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', ws => {

    const duplex = createWebSocketStream(ws, { encoding: 'utf8' });

    duplex.on('data', (chunk) => {
        validateArgs(chunk, ws);
    });

    console.log('Connection accepted');
})

wss.on('close', () => {
    console.log('bb');
});

