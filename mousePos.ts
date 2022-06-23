import robot from 'robotjs';

export const getMousePos = () => {

    const mousePos = robot.getMousePos();
    const resultMousePos = `mouse_position ${mousePos.x},${mousePos.y}`;

    return resultMousePos;

};