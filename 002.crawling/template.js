//자주쓰기 때문에 template으로 작성
const pupperteer = require('puppeteer');
const fs = require('fs');

const main = async() => {
    //launcher실행 
    //1.browser를 생성함
    //2. headless 기본값은 true, false로 바꾸면 브라우저가 실행됨
    const browser = await pupperteer.launch();
    //생성된 browser로 page를 생성함
    const page = await browser.newPage();
    
    //생성된 page로 goto 메소드를 사용해 이동할 수 있음(목적지 필요)
    //예를 들어, 크로미움을 실행하고 새페이지를 만들어서 구글로 이동
    await page.goto('URL');
    //브라우저(pupperteer) 종료
    await browser.close();
}