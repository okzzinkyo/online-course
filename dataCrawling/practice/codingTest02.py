# list A가 주어졌을 때, A를 K만큼 미뤄라.
# A = [3,5,6,1,2] K = 3 [6,1,2,3,5]
# A = [1,1,2,3,4] K = 42 [3,4,1,1,2]

# 어떤 리스트 A, K
# K는 리스트의 길이보다 작은 값으로 바꿀 수 있다. => ex 리스트의 길이가 5(원소의 개수가 5개) 일 때, k==1 == k==6 즉, 순환하는 구조이다.
#  K==1 맨 뒤에 하나가 맨앞으로 오고, k==2 맨 뒤 두 값이 맨 앞으로 온다.

def solution(A,K):
  # answer = []
  # index = 0
  # length = len(A)
  # if K < length :
  #   index = length - K
  # else :
  #  index = length - K % length

  # answer1 = A[index :]
  # answer2 = A[0 : index]
  # answer = answer1 + answer2


  # [문제풀이]
  # 1. k=> 줄여주기
  K = K % len(A)
  # 2.
  part1 = A[:len(A)-K]
  part2 = A[len(A)-K :] 

  return print(part2 + part1)

# solution([3,5,6,1,2], 3)
# solution([1,1,2,3,4], 42)

# list A가 주어졌을 때, A의 원소는 홀수로 이루어져 있다.
# 이때, 각 원소는 다른 원소와 짝을 이루는데, 짝을 이루지 못하는 원소값을 리턴하라
# [1,3,5,9,5,3,9,9,9] => 1

def solution2(A) :
  # A의 원소를 하나씩 체크한다.
  # 그 원소가 짝이 있는지 확인한다.
  # 사전형 활용
  # 사전 안에, 값이 없으면, 해당 값을 키로 하는 값을 추가하고 value는 0으로 세팅한다.{key:value}
  # 사전 안에 값이 이미 있으면 해당 값을 키로하는 값의 value + 1을 한다.

  # 사전 체크
  # 사전 안에 값들 중 value%2 == 0 => 짝이 있는 값
  # 출력해야 하는 값은 value%2 != 0 => 짝이 없는 놈
  answerDict = {}
  for i in A :
    if i in answerDict :
      answerDict[i] += 1
    elif i not in answerDict:
      answerDict[i] = 1

    for i in answerDict :
      if answerDict[i] % 2 != 0:
        return print(answerDict[i])

solution2([1,3,5,9,5,3,9,9,9])