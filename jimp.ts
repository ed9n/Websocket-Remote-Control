import robot from 'robotjs';
import Jimp from 'jimp';

export const jimp = async () => {

    const mousePos = robot.getMousePos();
    const x = mousePos.x;
    const y = mousePos.y;

    const screenImg = robot.screen.capture(x, y, 200, 200);

    const jimp = new Jimp({
        data: screenImg.image,
        width: screenImg.width,
        height: screenImg.height
    });

    const img = await jimp.getBase64Async(Jimp.MIME_PNG);
    const base64 = img.split(',').slice(1).toString();

    const result = `prnt_scrn ${base64}\0`;

    return result;
}