import puppeteer from "puppeteer"

const browser = await puppeteer.launch({
    headless: true,
    ignoreDefaultArgs: ['--disable-extensions'], // this made it work for now
    // executablePath: executablePath(),
})
const page = await browser.newPage()
export default page