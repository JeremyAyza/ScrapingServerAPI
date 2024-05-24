import puppeteer from "puppeteer"
// const executablePath = process.env.CHROME_EXECUTABLE_PATH || puppeteer.executablePath();

const options = {
    // slowMo: 500,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
    // executablePath: executablePath(),
}

export const newBrowser = async () => {
    return await puppeteer.launch(options)
}
export default browser
