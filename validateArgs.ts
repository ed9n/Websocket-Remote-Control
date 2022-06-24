import { RawData, WebSocket } from 'ws';
import { getMousePos } from './mousePos';
import { moveMouseDown, moveMouseLeft, moveMouseRight, moveMouseUp } from './moveMouse';
import { writeStream } from './streams';
import { drawCircle, drawRectangular, drawSquare } from './draw';


export const validateArgs = async (data: RawData, ws: WebSocket) => {

    try {
        const arg = data.toString().split(' ')[0];

        switch (arg) {
            case 'draw_circle':
                writeStream(ws, arg);
                drawCircle(data);
                break;

            case 'draw_square':
                writeStream(ws, arg);
                drawSquare(data);
                break;

            case 'draw_rectangle':
                writeStream(ws, arg);
                drawRectangular(data);
                break;

            case 'mouse_position':
                const mousePos = getMousePos();
                writeStream(ws, mousePos);
                break;

            case 'mouse_left':
                writeStream(ws, arg);
                moveMouseLeft(data);
                break;

            case 'mouse_right':
                writeStream(ws, arg);
                moveMouseRight(data);
                break;

            case 'mouse_down':
                writeStream(ws, arg);
                moveMouseDown(data);
                break;

            case 'mouse_up':
                writeStream(ws, arg);
                moveMouseUp(data);
                break;

            default:
                break;
        }

    } catch (error) {
        console.log(error);
    };
};