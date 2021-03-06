const pupperteer = require('puppeteer');

const main = async () => {
    try {
        const browser = await pupperteer.launch({
            headless: false,
            args: ["--window-size=1920,1080"]
        });

        const page = await browser.newPage();

        page.setViewport({
            width: 1920,
            height: 1080
        });

        await page.goto("https://www.google.com");
        await page.evaluate(() => {
            document.querySelector("input.gsfi").value = "코딩";
        });
        await page.keyboard.press("Enter");
    } catch (err) {
        console.log(err);
    }
};

main();