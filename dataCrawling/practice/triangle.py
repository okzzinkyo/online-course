# 1.	주제 : 삼각형
# 2.	입력 : 세 변의 값을 입력 받는다.
# 3.	출력 : 입력 받은 값을 기준으로 만들어진 삼각형이 무엇인지 출력한다.
# 4.	출력 형식(다음과 같이 출력하도록 하세요. 빨간색 : 입력 값, 검은색 : 출력 값)

# 첫번째 변의 길이? 5
# 두번째 변의 길이? 5
# 세번째 변의 길이? 5
# 정삼각형

edge1 = int(input('첫번째 변의 길이? '))
edge2 = int(input('두번째 변의 길이? '))
edge3 = int(input('세번째 변의 길이? '))

# 삼각형 아님
if edge1+edge2 <= edge3 or edge1+edge3 <= edge2 or edge2+edge3 <=edge1 :
  print("삼각형 아니다.")
elif edge1 == edge2 and edge1 == edge3 and edge2 == edge3 :
  print('정삼각형이다')
elif edge1 == edge2 or edge1 == edge3 or edge2 == edge3 :
  print('이등변삼각형이다')
elif pow(edge1,2) == pow(edge2,2) + pow(edge3,2) or pow(edge2,2) == pow(edge1,2) + pow(edge3,2) or pow(edge3,2) == pow(edge3,2) + pow(edge3,2) :
  print('직각삼각형이다')
else :
  print('삼각형이다')
# edge1 == edge2 or edge1 == edge3 or edge2 == edge3 :
  # print('이등변삼각형이다')
