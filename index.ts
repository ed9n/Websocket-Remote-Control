import Jimp from 'jimp';
import { httpServer } from './src/http_server/index';
import robot from 'robotjs';
import { WebSocketServer } from 'ws';
import { drawCircle, drawRectangular, drawSquare } from './src/utils';

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: 8080 });


wss.on('connection', ws => {
    console.log('Connection accepted');
    ws.on('message', (data) => {
        const value = data.toString();

        // drawCircle(value);
        // drawSquare(value);
        // drawRectangular(value);
    })
})


wss.on('close', () => {
    console.log('User is exit')
});

