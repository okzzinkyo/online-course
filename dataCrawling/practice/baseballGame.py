import random
# 1.	주제 : 숫자 야구 게임
# 2.	입력 : 각 시도마다 4자리 정수를 입력한다.
# 3.	출력 : 입력한 4자리 수를 정답과 비교한다. 정답에 내가 입력한 수 가 있는데 위치가 다르면 B 위치도 같으면 S값을 +1해서 출력한다. 정답과 내가 유추한 수가 같으면 아래와 같이 출력하고 프로그램을 종료한다. 정답의 각 자리는 1~9의 값으로 0은 포함하지 않는다. 정답을 맞출 기회는 최대 10번까지 이고 실패시 아래와 같은 문구를 출력한다. 0을 누르면 포기로 포기시 아래와 같은 문구를 출력한다.
# 4.	출력 형식(다음과 같이 출력하도록 하세요. 빨간색 : 입력 값, 검은색 : 출력 값)
# *** 숫자야구 게임 *** (정답 7836)
# 네자리 숫자를 입력하시오. (0=포기)
# 1번째 시도: 1234
# 1S 0B
# 2번째 시도: 2345
# 0S 1B
# 3번째 시도: 7846
# 3S 0B
# 4번째 시도: 7836
# 축하합니다. 정답을 맞혔습니다.

# while True :
#   answer = ''
#   while len(answer) < 4 :
#     value = str(random.randint(1,9))
#     if value in list(answer) :
#       continue
#     else :
#       answer += value
#   print('*** 숫자야구 게임 *** (정답 %s)' %answer)
#   cnt = 1
#   number = input('네자리 숫자를 입력하시오.(0=포기) ')
#   while cnt < 11:
    
#     if number == '0' :
#       print('게임을 포기하였습니다.')
#       print('정답은 %s 입니다.' %answer)
#       break
    
#     if len(number) != 4 :
#       continue

#     print('%d번째 시도:' %cnt, number)
    
#     if number == answer :
#       print('축하합니다. 정답을 맞혔습니다.')
#       break

#     # answer = list(answer)
#     number = list(number)
#     s = 0
#     b = 0
#     for a in range(4):

#       if number[a] in answer :
#         if answer[a] == number[a] :
#           s += 1
#           continue
#         else:
#           b += 1
      
#       # TODO - ball 카운트 중복되서 추가되는 오류 수정 필요
  
#     if cnt == 10 :
#       print('더 이상 기회가 없습니다.')
#       print('정답은 %s 입니다.' %answer)
#       break

#     cnt +=1
#     print('%dS %dB' %(s,b))


# [문제풀이]
  # 각 자리수는 1!9 => 0은 안된다. + 반복되면 안된다. 1122(X),1304(X)
  # answer 생성 => import random random.randint(x,y)
  # 1~9 사이의 핸덤수를 4번 생성
  # 4번 생성 도중 이미 생성한 값과 같은 값을 생성했을 경우, 다시 생성
  # 각 값을 하나로 합친다. => 스트링으로 처리, 정수형으로 처리
    
answerList = [] # [1,3,5,7]
for i in range(4) :
  temp = random.randint(1,9)
  while temp in answerList :
    temp = random.randint(1,9)
  answerList.append(temp)

# 스트링으로 합치는 방법
answer = str(answerList[0]) + str(answerList[1]) + str(answerList[2]) + str(answerList[3])

# 정수형으로 합치는 방법
# answer = answerList[0]*1000 + answerList[1]*100 + answerList[2]*10 + answerList[3]

print('*** 숫자야구 게임 *** (정답 %s)' %answer)
print('네자리 숫자를 입력하시오.(0=포기)')
check = False
for time in range(1,11) :
  guess = input('%d번째 시도:' %time)
  s = 0
  b = 0
  
  if guess == '0' : 
    print('게임을 포기하였습니다.')
    print('정답은 %s 입니다.' %answer)
    check = True
    break

  if guess == answer :
    print('축하합니다. 정답을 맞혔습니다.')
    check = True
    break

  for i in guess:
    print(i)
    if i in answer:
      if guess.index(i) == answer.index(i):
        s += 1
      else : 
        b += 1

  print('%dS %dB' %(s,b))

if check == False :
  print('더 이상 기회가 없습니다.')
  print('정답은 %s 입니다.' %answer)


# 반복 1회 1~10
# 반복문 내 처리 사항
# 1. 입력받기
  # int('번째 시도')

# 2. 정답과 입력받은 값 비교
  # b => 추측한 값이 answer 안에만 있고, 위치는 다를 경우
  # s => 추측한 값의 각 자리 값이 answer 안에 있으면서, 위치도 같을 경우 
  # i in list // list.index()

# 3. 정답일 경우 => 반복은 탈출 + 축하합니다. 
  # 출력 break print(축하)
# 4. 10번 시도후 실패 > 기회가 없습니다 + 정답 출력
  # 반복문 밖에서 정답 출력
# 5. 포기했을 경우 -> 반복문 탈출 + 게임을 포기하였습니다. 정답 출력
  # break print()