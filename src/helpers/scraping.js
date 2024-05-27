import { newBrowser } from "../browser.js";

const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
};
export const scrapFromDuck = async (name) => {
    const search = `https://duckduckgo.com/?q=${name}&iax=images&ia=images`
    const browser = await newBrowser()
    const page = await browser.newPage()
    await page.setExtraHTTPHeaders(headers);
    await page.goto(search)
    const url = await page.evaluate(async () => {
        await new Promise((r) => setTimeout(r, 1000));
        const container = document.querySelector('.tile-wrap')
        return container.getElementsByTagName('img')[0]?.src
    })
    await page.close()
    await browser.close()
    return url
}
export const scrapFromGoogle = async (name) => {
    const browser = await newBrowser()
    const page = await browser.newPage()
    const search = `https://www.google.com/search?q=${name}&udm=2`
    await page.setExtraHTTPHeaders(headers);
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
        return img?.src
    })
    await page.close()
    await browser.close()
    return url
}


export const first5Duck = async (name) => {
    const browser = await newBrowser()
    const search = `https://duckduckgo.com/?q=${name}&iax=images&ia=images`
    const page = await browser.newPage()
    await page.setExtraHTTPHeaders(headers);
    await page.goto(search)
    const urlList = await page.evaluate(async () => {
        await new Promise((r) => setTimeout(r, 1000));
        const container = document.querySelector('.tile-wrap')
        const images = container.getElementsByTagName('img')
        const list = [];
        // Iterar sobre las primeras 5 imágenes o menos si hay menos de 5
        for (let i = 0; i < Math.min(images.length, 6); i++) {
            // const img = images[i];
            // console.log({ img });
            // img.click();
            // const main = document.querySelector('.detail__media__img-wrapper');
            // console.log({ main });
            // const url = main.getElementsByTagName('a')[0].href
            // console.log(url);
            list.push(images[i].src);
        }
        return list
    })
    await page.close()
    await browser.close()
    return urlList
}
export const first5Google = async (name) => {
    const search = `https://www.google.com/search?q=${name}&udm=2`
    const browser = await newBrowser()
    const page = await browser.newPage()
    await page.setExtraHTTPHeaders(headers);
    await page.goto(search)
    const list = await page.evaluate(async () => {
        // await new Promise((r) => setTimeout(r, 1000));
        const listUrls = []
        const container = document.querySelector('div[role="main"]')
        const listImages = container.querySelectorAll('img')
        for (let i = 0; i < Math.min(listImages.length, 12); i++) {
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
    await page.close()
    await browser.close()
    return list
}


export const scrapListFromDuck = async (list) => {
    const browser = await newBrowser()
    const page = await browser.newPage()
    await page.setExtraHTTPHeaders({
        'Access-Control-Allow-Origin': '*',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': '*/*',
    });
    const listUrls = []
    for (let index = 0; index < list.length; index++) {
        const name = list[index]
        const search = `https://duckduckgo.com/?q=${name}&iax=images&ia=images`
        await page.goto(search)
        const urlList = await page.evaluate(async () => {
            await new Promise((r) => setTimeout(r, 1000));
            const container = document.querySelector('.tile-wrap')
            const images = container.getElementsByTagName('img')
            const listItem = [];
            // Iterar sobre las primeras 5 imágenes o menos si hay menos de 5
            for (let i = 0; i < Math.min(images.length, 6); i++) {
                listItem.push(images[i].src);
            }
            return listItem
        })
        listUrls.push(urlList)
    }
    await page.close()
    await browser.close()
    return listUrls

}
