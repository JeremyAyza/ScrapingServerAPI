import { first5Google } from "./src/helpers/scraping.js";

first5Google('perrito')

const init = async () => {
    await new Promise((r) => setTimeout(r, 1000));
    const listUrls = []
    const container = document.querySelector('div[role="main"]')
    const listImages = container.querySelectorAll('img')
    for (let i = 0; i < Math.min(listImages.length, 10); i++) {
        console.log('inicio', i);
        if (i % 2 === 1 && i) {
            continue
        }
        console.log('img', listImages[i]);
        listImages[i].click()
        await new Promise((r) => setTimeout(r, 2000));
        const buttonCamara = document.querySelector('button[aria-label="Buscar en la imagen"]') || document.querySelector('button[aria-label="Buscar dentro de la imagen"]');
        console.log({ buttonCamara });
        await new Promise((r) => setTimeout(r, 2000));
        const containerImg = buttonCamara.parentNode.parentNode.parentNode.parentNode
        console.log({ containerImg });
        await new Promise((r) => setTimeout(r, 1000));
        const images = containerImg.querySelectorAll('img')
        console.log({ images });
        const img = images[images.length - 1];
        listUrls.push(img?.src)
        console.log('fin', i);

    }
    return listUrls
}