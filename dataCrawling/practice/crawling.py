#  웹 크롤링이란 웹상의 정보들을 탐색하고 수집하는 작업
#  웹 스크래핑은 특정 웹 사이트나 페이지에서 필요한 데이터를 자동으로 추출해 내는 것

# 심층 분석과 실시간 정보 제공에 유용한 “웹 크롤링”
# 웹 크롤링은 웹상을 돌아다니며 방대한 양의 정보를 수집하기 때문에, 특정 키워드에 대한 심층 분석이 필요할 때 유용합니다. 또한 크롤러는 실시간 정보 수집을 위해 계속해서 작동하므로 자주 변화하는 데이터를 파악하기가 좋습니다.

# 정확한 정보를 요구할 때 쓰이는 “웹 스크래핑”
# 웹 스크래핑은 특정 사이트나 페이지에 대한 정보를 찾는데 집중하므로 데이터 포인트를 정확히 잡고 확실한 정보만을 수집할 수 있다는 점에서 유용합니다. 장기적으로 서비스 대역폭이나 비용을 절약할 수 있다는 장점이 있습니다.

#!/usr/bin/env python3
# Anchor extraction from HTML document
# bs4 설치
# pip install bs4
from bs4 import BeautifulSoup
from urllib.request import urlopen

# response = urlopen('https://en.wikipedia.org/wiki/Main_Page') 
# with urlopen('https://en.wikipedia.org/wiki/Main_Page') as response:

# soup = BeautifulSoup(response, 'html.parser')
# for anchor in soup.find_all('a'):
#     # print(anchor.get('href', '/'))
#     print(anchor.get_text())

# bs4 자바스크립트를 통해 동적으로 변하는 데이터는 크롤링이 불가능하다
# selenium 사용으로 해결
    
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

chrome_options = Options()
chrome_options.add_experimental_option("detach", True)

# selenium 부터
driver = webdriver.Chrome(options=chrome_options)

# 로딩 완료까지 3초 대기
driver.implicitly_wait(3)
driver.get(url='https://datalab.naver.com/')
html = driver.page_source
soup = soup = BeautifulSoup(html, 'html.parser')

f = open('새파일.txt','w')

number = 1
for i in soup.select('ul.rank_list span.title'):
    data = str(number) + '위, ' + i.get_text() +'\n'
    f.write(data)

    if number == 10 :
      number = 1
    else :
      number += 1
    print(i.get_text())
f.close()

