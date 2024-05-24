import puppeteer from "puppeteer"
// const executablePath = process.env.CHROME_EXECUTABLE_PATH || puppeteer.executablePath();

const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
    // executablePath: executablePath(),
})
const page = await browser.newPage()
export default page