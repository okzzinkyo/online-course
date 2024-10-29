# 1.	주제 : 소수 리스트
# 2.	입력 : 시작 숫자와 소수 개수를 입력받는다.
# 3.	출력 : 시작 숫자(2 이하의 숫자를 입력하면 종료!)부터 소수 개수만큼의 소수를 출력한다. 
# 4.	출력 형식(다음과 같이 출력하도록 하세요. 빨간색 : 입력 값, 검은색 : 출력 값)

# Project: 소수 리스트
# 시작 숫자? 3
# 소수 개수? 50 
# 소수 리스트 = [3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233]
# 시작 숫자? 5
# 소수 개수? 10
# 소수 리스트 = [5, 7, 11, 13, 17, 19, 23, 29, 31, 37]
# 시작 숫자? 1
# bye~

def getPrimeNumber(number): # 9
    # 2부터 입력받은 숫자(number)까지 증가시키면서 number를 나눌때
    # 나누어 떨어
    for i in list(range(2,number)) : #2,3,4,5,6,7,8
      print(i)
      if(number % i == 0): # 소수아님
        return False
      else :
        return True # 소수임

print("Project: 소수 리스트")
while True:
  start = int(int(input('시작 숫자? ')))
  if start < 2 :
    print('bye')
    break

  cnt = int(input('소수 개수? '))
  list = []
  a = start - 1
  while len(list) < cnt:
    print(getPrimeNumber(a))
    a+=1
    if(getPrimeNumber(a)) :
      list.append(a)
    else :
      continue
    # if(a%2 == 0): #짝수이면
    #     a += 1

    #     primeNumber = getPrimeNumber(a)
    #     if(primeNumber) :
    #       list.append(primeNumber)
    #       a +=2
    #     else :
    #       a += 2
          
    # if(start%2 == 1): #홀수이면
    #   primeNumber = getPrimeNumber(a)
    #   if(primeNumber) :
    #     list.append(primeNumber)
    #     a +=2
    #   else :
    #     a += 2
  print('소수 리스트=',list)



# [과제-7] 풀이
def is_prime(x): 
  if x == 2:
    return True
  if x%2 == 0 :
    return False
  else:
    for i in list(range(3,x,2)): #x==10 3,5,7,9
      if x%i == 0: # 10
        return False
  return True

while True:
  start = int(int(input('시작 숫자? ')))
  if start < 2 :
    print('bye')
    break
  
  #1. size > 0 동안 반복
  #2. start + 1
  #3. start 값이 소수인지 확인
  #4. 만역 start 값이 소수라면, answer 리스트에 추가하고 size-1

  size = int(input('소수 개수? '))
  answers = []                       
  
  while size >0:
    if is_prime(start):
      size -=1
      answers.append(start)
    start +=1
  print('소수 리스트=',answers)





