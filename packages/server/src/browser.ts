import './index'
import puppeteer from 'puppeteer'

async function startBrowser() {
  let browser = null

  try {
    console.log('opening the browser...')
    browser = await puppeteer.launch({
      headless: false,
      args: ['--disable-setuid-sandbox'],
      ignoreHTTPSErrors: true,
    })
  } catch (error) {
    console.error('Could not create a browser instance => : ', error)
    const hello = 'hellowddddww'
    console.log(hello)
  }

  return browser
}

export default startBrowser
