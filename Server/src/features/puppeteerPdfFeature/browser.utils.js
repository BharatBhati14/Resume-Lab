import puppeteer from "puppeteer";

let browser;

export async function getBrowser() {
  if (!browser) {
    browser = await puppeteer.launch({
      headless: true,

      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-gpu",
      ],
    });

    console.log("Chromium launched");
  }

  return browser;
}

export async function closeBrowser() {
  if (browser) {
    await browser.close();
    browser = null;

    console.log("Chromium closed");
  }
}
