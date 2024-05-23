import puppeteer from "puppeteer"
// const executablePath = process.env.CHROME_EXECUTABLE_PATH || puppeteer.executablePath();

const browser = await puppeteer.launch({
    // executablePath,
    // headless: false,
    // slowMo: 500,
    // args: ['--no-sandbox', '--disable-setuid-sandbox']
})
const page = await browser.newPage()
export default page