import robot from 'robotjs';
import { RawData } from 'ws';

export const drawCircle = async (data: RawData) => {

    try {
        const radius = +data.toString().split(' ')[1];

        const mousePos = robot.getMousePos();
        robot.setMouseDelay(8);

        for (let i = 0; i <= Math.PI * 2; i += 0.01) {

            const x = mousePos.x + (radius * Math.cos(i));
            const y = mousePos.y + (radius * Math.sin(i));

            robot.dragMouse(x, y);

            robot.mouseToggle('down');
            robot.mouseToggle("up");
        };

    } catch (error) {
        console.log(error);
    };
};

export const drawSquare = async (data: RawData) => {

    try {
        const width = +data.toString().split(' ')[1];

        robot.setMouseDelay(5);

        const side = robot.getMousePos();

        for (let i = 0; i < width; i++) {
            let x = side.x;
            let y = side.y;

            robot.moveMouseSmooth(x + i, y);
            robot.mouseToggle('down');
        }
        const side2 = robot.getMousePos();

        for (let i = 0; i < width; i++) {

            const x = side2.x;
            const y = side2.y;

            robot.moveMouseSmooth(x, y + i);
            robot.mouseToggle('down');
        };

        const side3 = robot.getMousePos();

        for (let i = 0; i < width; i++) {

            const x = side3.x;
            const y = side3.y;

            robot.moveMouseSmooth(x - i, y);
            robot.mouseToggle('down');
        };

        const side4 = robot.getMousePos();

        for (let i = 0; i < width; i++) {

            const x = side4.x;
            const y = side4.y;

            robot.moveMouseSmooth(x, y - i);
            robot.mouseToggle('down');
            robot.mouseToggle("up");
        };

    } catch (error) {
        console.log(error);
    };
};

export const drawRectangular = async (data: RawData) => {

    try {
        const width = +data.toString().split(' ')[1];
        const length = +data.toString().split(' ')[2];

        robot.setMouseDelay(5);

        const side = robot.getMousePos();

        for (let i = 0; i < width; i++) {
            let x = side.x;
            let y = side.y;

            robot.moveMouseSmooth(x + i, y);
            robot.mouseToggle('down');
        };

        const side2 = robot.getMousePos();

        for (let i = 0; i < length; i++) {

            const x = side2.x;
            const y = side2.y;

            robot.moveMouseSmooth(x, y + i);
            robot.mouseToggle('down');
        };

        const side3 = robot.getMousePos();

        for (let i = 0; i < width; i++) {

            const x = side3.x;
            const y = side3.y;

            robot.moveMouseSmooth(x - i, y, 20);
            robot.mouseToggle('down');
        };

        const side4 = robot.getMousePos();

        for (let i = 0; i < length; i++) {

            const x = side4.x;
            const y = side4.y;

            robot.moveMouseSmooth(x, y - i, 20);
            robot.mouseToggle('down');
            robot.mouseToggle("up");

        };

    } catch (error) {
        console.log(error);
    };

};