# Web_NODE-4-

### 크롤링
- Web Scraping
  - 웹 사이트에서 데이터를 추출하는 프로그래밍 기술
  - 사이트에 있는 정보를 가져오는 행동
- Web Crawler
  - URL을 가져온 후, 또 다시 URL에 접속을 반복하여 웹을 탐색하는 Web Scraping을 하는 봇
    - Spiderbot이라고도 함
  - 재귀적으로 웹을 탐색하며 사이트를 가져오는 프로그램
- robots.txt
  - 웹 크롤러들이 접근하지 못하도록 제한하는 규약
  - Robots excluion standard 표준 규약
  - 각 홈페이지 뒤에 robots.txt를 붙이면 조회 가능
  
### Puppeteer 크롤링
- puppeteer
  - 구글 크롬에서 공개한 Node.js 크롤링 라이브러리
  - 크로미움 기반
  - headless로 동작 기능
  - PDF, 스크린샷 생성
  - 키보드 입력 자동화
  - 데이터 저장
  - SPA 크롤링
>> [실습1](https://github.com/KimUJin3359/Web_NODE-4-/blob/master/002.crawling/001.crawling.js) : 웹 페이지 열기

>> [실습2](https://github.com/KimUJin3359/Web_NODE-4-/blob/master/002.crawling/002.crawling_pdf.js) : 웹 페이지 pdf로 저장

>> [실습3](https://github.com/KimUJin3359/Web_NODE-4-/blob/master/002.crawling/003.crawling_screenshot.js) : 웹 페이지 스크린샷 저장

>> [실습4](https://github.com/KimUJin3359/Web_NODE-4-/blob/master/002.crawling/004.move_page.js) : 웹 페이지 다중 로드

>> [실습5](https://github.com/KimUJin3359/Web_NODE-4-/blob/master/002.crawling/005.search_google.js) : 웹 페이지 자동 검색하기
