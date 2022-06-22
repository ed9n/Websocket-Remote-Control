export const drawCircle = (radius) => {
    const r = +radius.toString().split(' ')[1]

    const mousePos = robot.getMousePos();
    robot.setMouseDelay(1)

    for (let i = 0; i <= Math.PI * 2; i += 0.001) {

        const x = mousePos.x + (r * Math.cos(i));
        const y = mousePos.y + (r * Math.sin(i));

        robot.dragMouse(x, y);
    }
};

export const drawSquare = (width) => {

    const w = +width.toString().split(' ')[1];

    const mousePos = robot.getMousePos();

    const x = mousePos.x;
    const y = mousePos.y;

    robot.moveMouseSmooth(x + w, y, 20);
    robot.moveMouseSmooth(x + w, y + w, 20);
    robot.moveMouseSmooth(x, y + w, 20);
    robot.moveMouseSmooth(x, y, 20);
}