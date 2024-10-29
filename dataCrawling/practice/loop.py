# 1.	주제 : 숫자 정사각형
# 2.	입력 : 정수 하나를 입력받는다.
# 3.	출력 : 출력 형식 참고, 출력을 반복하다가 1보다 작은 값을 입력하면 종료한다.
# 4.	출력 형식(다음과 같이 출력하도록 하세요. 빨간색 : 입력 값, 검은색 : 출력 값)

print('Project: 숫자 정사각형')
while True :
  size = int(input('정사각형 크기는? '))
  if size < 1 : 
    break
  for i in range(1, size + 1):
    result = str(i)[-1]
    for j in range(i + 1 , i + size) : 
      if(j >= 10):
        result = str(result) + str(j)[-1]
      else :
        result = str(result) + str(j)
    print(result)
print('끝!')

# [풀이]
# x
# 1: 1...x
# 2: 2...x+1
# .
# .
# .
# x: x...x+x-1

while True :
  size = int(input('정사각형 크기는? '))
  if size < 1 : 
    break
  for j in range(size) :
    for i in range(1, size + 1):
      print((i+j)%10, end='')
    print()
print('끝!')

# Project: 숫자 정사각형

# 정사각형 크기는? 10
# 1234567890
# 2345678901
# 3456789012
# 4567890123
# 5678901234
# 6789012345
# 7890123456
# 8901234567
# 9012345678
# 0123456789

# 정사각형 크기는? 5
# 12345
# 23456
# 34567
# 45678
# 56789

# 정사각형 크기는? 0
# 끝!
