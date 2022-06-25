import robot from 'robotjs';
import Jimp from 'jimp';
import { writeStream } from './streams';



export const jimp = async () => {

    const mousePos = robot.getMousePos();
    const x = mousePos.x
    const y = mousePos.y

    const img = robot.screen.capture(x, y, 100, 100)

    const jimp = new Jimp({
        data: img.image,
        width: img.width,
        height: img.height
    })


    const base = await jimp.getBase64Async(Jimp.MIME_PNG);
    const base64 = base.split(',').slice(1).toString()
    // const base64 = test.split(',').slice(1, 2).toString();
    // const buff = test.split(',').slice(2)

    const result = `prnt_scrn ${base64}`
    return result


}