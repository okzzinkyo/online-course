# 1.	주제 : range 함수 만들기
# 2.	입력 : range함수의 시작 값, 종료 값, 커지는 값을 입력 받는다.
# 3.	출력 : range 함수의 결과와 내가 만든 range함수의 결과를 출력한다.
# 4.	출력 형식(다음과 같이 출력하도록 하세요. 빨간색 : 입력 값, 검은색 : 출력 값)

# Project: range함수

# start? 0
#  stop? 10
#  step? 2
# Result = [0, 2, 4, 6, 8]
# list(range()) = [0, 2, 4, 6, 8]

# start?

print('Project: range함수')
while True:
  start = int(input('start? '))
  stop = int(input(' stop? '))
  step = int(input(' step? '))

  if step == 0:
    break

  Result = []
  for i in range(start, stop, step) :
    Result.append(i)
  print('list(range()) = ', Result)


# 풀이
print('Project: range함수')
while True:
  print()
  start = int(input('start? '))
  stop = int(input(' stop? '))
  step = int(input(' step? '))

  if step == 0:
    break

  answer = []

  if step > 0:
    #step이 양수일 때
    # 1. start
    # 2. start + step
      # 2-1. 2번 값을 Result 리스트에 넣는다
    # 3. 2번 과정을 반복한다.
    # 2번의 값이 stop보다 작은 동안에는 계속
    temp = start
    while temp < stop :
      answer.append(temp)
      temp += step
  else :
    # step이 음수일 때
    # 1. start
    # 2. start + step
      # 2-1. 2번 값을 Result 리스트에 넣는다
    # 3. 2번 과정을 반복한다.
    # 2번의 값이 stop보다 큰 동안에는 계속
    temp = start
    while temp > stop :
      answer.append(temp)
      temp += step

  print('Result = ', answer)
  print('list(range()) = ', list(range(start,stop,step)))

  # list(range(start,stop,step)) ==> stop보다 작은 동안에는, start에다가 step만큼 값을 추가해서 그 결과 값들을 출력해라

 
