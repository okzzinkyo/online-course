import random

# 1.	주제 : 번호 추첨
# 2.	입력 : 시작 수, 마지막 수, 추첨 개수를 입력 받는다.
# 3.	출력 : 랜덤으로 추첨한 값을 리스트로 출력한다.
# 4.	출력 형식(다음과 같이 출력하도록 하세요. 빨간색 : 입력 값, 검은색 : 출력 값)
# Project: 번호추첨

# 추첨 수의 시작 수는? 5
# 추첨 수의 마지막 수는? 10
# 추첨 수의 개수는? 2
# 추첨 번호 리스트는 [6, 9]

# 추첨 수의 시작 수는?

# class number
print('Project: 번호추첨')

class myPos :
  start = 0
  end = 0
  def getNumber(self):
    return random.randint(self.start,self.end)

a = myPos()
while True:
  print()
  a.start = int(input('추첨 수의 시작 수는? '))
  a.end = int(input('추첨 수의 마지막 수는? '))
  size = int(input('추첨 수의 개수는? '))
  answer = []

  for i in range(size) :
    answer.append(a.getNumber())

  print('추첨 번호 리스트? ', answer)

# 오류 - 같은 수가 출력이 되는 경우 존재

# [문제풀이]
while True:
  print()
  start = int(input('추첨 수의 시작 수는? '))
  end = int(input('추첨 수의 마지막 수는? '))
  size = int(input('추첨 수의 개수는? '))
  answer = []

  #1. 반복 number => while, for
  #2. random.randint(start,end) => 난수 생성
  #3. answer 리스트 안에 2번에서 생성한 난수가 있는지 확인, 있으면 다시 생성하고 없으면 4번 진행
  #4. answer.append()

  while size > 0 :
    choosed = random.randint(start, end)
    if choosed in answer :
      continue
    else :
      answer.append(choosed)
      size -= 1

  for i in range(size) :
    choosed = random.randint(start, end)
    if choosed in answer:
      while choosed not in answer:
        choosed = random.randint(start,end)
      answer.append(choosed)
    else:
      answer.append(choosed)

  print('추첨 번호 리스트? ', answer)









# random.random()
# 0~1사이 숫자를 출력
# ex) 0.5723548435452288

# random.randint(a,b)
# a보다 크거나 같고 b보다 작은 수를 출력

# random.randrange(start,stop,step)
# start부터 stop보다 작을 때까지 step 만큼 증가하는 수에서 하나를 출력

# random.choices(튜플명)
# 리스트 중 아무 값을 출력 

# random.shuffle()
# 튜플 순서를 무작위로 변경해서 출력
  
  