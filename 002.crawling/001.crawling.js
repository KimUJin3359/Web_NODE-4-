const pupperteer = require('puppeteer');
const fs = require('fs');

const main = async() => {
    const browser = await pupperteer.launch();
    const page = await browser.newPage();
    
    //networkidle0 => 페이지 컨텐츠가 다 로딩될 때까지 기다린다
    //networkidle1
    //networkidle2 => 페이지 전체가 로딩 되는 것이 아니면 사용하지 않음
    await page.goto('https://kookbang.dema.mil.kr/newsWeb/20180724/1/BBSMSTR_000000010024/view.do', {
        waitUntil : 'networkidle2',
    });
    //페이지가 로드될 시간을 벌기위해 6초 기다림
    await page.waitForTimeout(6000);

    const html = await page.content();
    //파일명 작성(크롤링 할 것, 크롤링 넣을 것)
    fs.writeFileSync('example.html', html);
    await browser.close();
}

main();