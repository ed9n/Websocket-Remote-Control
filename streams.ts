import { createWebSocketStream, WebSocket } from 'ws';

export const writeStream = async (ws: WebSocket, chunk: string) => {

    try {
        const duplex = createWebSocketStream(ws, { encoding: 'utf8' });
        duplex._write(chunk, 'utf-8', (err) => { });

    } catch (error) {
        console.log(error);
    }

}
