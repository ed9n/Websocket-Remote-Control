import robot from 'robotjs';
import { RawData } from 'ws';

export const drawCircle = async (data: RawData) => {

    try {
        const radius = +data.toString().split(' ')[1];

        const mousePos = robot.getMousePos();

        for (let i = 0; i <= Math.PI * 2; i += 0.01) {

            const x = mousePos.x + (radius * Math.cos(i));
            const y = mousePos.y + (radius * Math.sin(i));

            robot.dragMouse(x, y);
            robot.mouseToggle('down');
        };

        robot.mouseToggle("up");

    } catch (error) {
        console.log(error);
    };
};

export const drawSquare = async (data: RawData) => {

    try {
        const width = +data.toString().split(' ')[1];

        const side = robot.getMousePos();
        let x = side.x;
        let y = side.y;

        robot.mouseToggle('down');
        robot.moveMouseSmooth(x + width, y, 20);
        robot.moveMouseSmooth(x + width, y + width, 20);
        robot.moveMouseSmooth(x, y + width, 20);
        robot.moveMouseSmooth(x, y, 20);
        robot.mouseToggle('up');

    } catch (error) {
        console.log(error);
    };
};

export const drawRectangular = async (data: RawData) => {

    try {
        const width = +data.toString().split(' ')[1];
        const length = +data.toString().split(' ')[2];
        const side = robot.getMousePos();

        let x = side.x;
        let y = side.y;

        robot.mouseToggle('down');
        robot.moveMouseSmooth(x + width, y);
        robot.moveMouseSmooth(x + width, y + length);
        robot.moveMouseSmooth(x + width, y + length);
        robot.moveMouseSmooth(x, y + length);
        robot.moveMouseSmooth(x, y)
        robot.mouseToggle('up');

    } catch (error) {
        console.log(error);
    };

};