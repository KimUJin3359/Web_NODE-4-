const pupperteer = require('puppeteer');

const main = async () => {
    const browser = await pupperteer.launch({headless: false});
    const [page, page2, page3] = await Promise.all([
        browser.newPage(),
        browser.newPage(),
        browser.newPage(),
    ]);

    await Promise.all([
        page.goto('https://google.com'),
        page2.goto('https://www.naver.com'),
        page3.goto('https://www.daum.net'),
    ]);

    console.log('작업중...');
    page3.waitForTimeout(15000);
    await page.close();
    await page2.close();
    await page3.close();
    await browser.close();
}

main();