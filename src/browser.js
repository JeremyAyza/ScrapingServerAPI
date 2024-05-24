import puppeteer from "puppeteer"
// const executablePath = process.env.CHROME_EXECUTABLE_PATH || puppeteer.executablePath();

const browser = await puppeteer.launch({
    // slowMo: 500,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
    // executablePath: executablePath(),
})
export default browser
