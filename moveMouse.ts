import robot from 'robotjs';

export const moveMouseRight = (chunk: any) => {

    const value = +chunk.split(' ')[1];

    const mousePos = robot.getMousePos();
    const x = mousePos.x;
    const y = mousePos.y;

    robot.moveMouseSmooth(x + value, y);

};

export const moveMouseLeft = (chunk: any) => {

    const value = +chunk.split(' ')[1];

    const mousePos = robot.getMousePos();
    const x = mousePos.x;
    const y = mousePos.y;

    robot.moveMouseSmooth(x - value, y);

};

export const moveMouseUp = (chunk: any) => {

    const value = +chunk.split(' ')[1];

    const mousePos = robot.getMousePos();
    const x = mousePos.x;
    const y = mousePos.y;

    robot.moveMouseSmooth(x, y - value);

};

export const moveMouseDown = (chunk: any) => {

    const value = +chunk.split(' ')[1];

    const mousePos = robot.getMousePos();
    const x = mousePos.x;
    const y = mousePos.y;

    robot.moveMouseSmooth(x, y + value);

};