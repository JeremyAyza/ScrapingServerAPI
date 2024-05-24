import page from "../page.js";
export const scrapFromDuck = async (name) => {
    const search = `https://duckduckgo.com/?q=${name}&iax=images&ia=images`
    await page.goto(search)
    const url = await page.evaluate(async () => {
        await new Promise((r) => setTimeout(r, 1000));
        const container = document.querySelector('.tile-wrap')
        return container.getElementsByTagName('img')[0]?.src
    })
    return url
}
export const scrapFromGoogle = async (name) => {
    const search = `https://www.google.com/search?q=${name}&udm=2`
    await page.goto(search)
    const url = await page.evaluate(async () => {
        await new Promise((r) => setTimeout(r, 1000));
        const list = document.querySelector('div[role="main"]')
        list.querySelector('img').click()
        await new Promise((r) => setTimeout(r, 2000));
        const buttonCamara = document.querySelector('button[aria-label="Buscar en la imagen"]') || document.querySelector('button[aria-label="Buscar dentro de la imagen"]');
        await new Promise((r) => setTimeout(r, 2000));
        const containerImg = buttonCamara.parentNode.parentNode.parentNode.parentNode
        await new Promise((r) => setTimeout(r, 1000));

        const images = containerImg.querySelectorAll('img')
        const img = images[images.length - 1];
        console.log('URL', img?.src);
        return img?.src
    })
    return url
}


export const first5Duck = async (name) => {
    const search = `https://duckduckgo.com/?q=${name}&iax=images&ia=images`
    await page.goto(search)
    const urlList = await page.evaluate(async () => {
        await new Promise((r) => setTimeout(r, 1000));
        const container = document.querySelector('.tile-wrap')
        const images = container.getElementsByTagName('img')
        const list = [];
        // Iterar sobre las primeras 5 imágenes o menos si hay menos de 5
        for (let i = 0; i < Math.min(images.length, 5); i++) {
            list.push(images[i].src);
        }
        return list
    })
    return urlList
}
export const first5Google = async (name) => {
    const search = `https://www.google.com/search?q=${name}&udm=2`
    await page.goto(search)
    const list = await page.evaluate(async () => {
        // await new Promise((r) => setTimeout(r, 1000));
        const listUrls = []
        const container = document.querySelector('div[role="main"]')
        const listImages = container.querySelectorAll('img')
        for (let i = 0; i < Math.min(listImages.length, 10); i++) {
            if (i % 2 === 1 && i) {
                continue
            }
            listImages[i].click()
            // await new Promise((r) => setTimeout(r, 2000));
            const buttonCamara = document.querySelector('button[aria-label="Buscar en la imagen"]') || document.querySelector('button[aria-label="Buscar dentro de la imagen"]');
            // await new Promise((r) => setTimeout(r, 2000));
            const containerImg = buttonCamara.parentNode.parentNode.parentNode.parentNode
            // await new Promise((r) => setTimeout(r, 1000));
            const images = containerImg.querySelectorAll('img')
            const img = images[images.length - 1];
            listUrls.push(img?.src)
        }
        return listUrls
    })
    return list
}
