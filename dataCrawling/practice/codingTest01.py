# 숫자 N이 주어졌을 때, 이진수 N에 대하여 1과 그 다음 1이 나오기 전까지 0의 개수 중 최대 개수를 구하시오

#999 = 1111100111 => 2
#329 = 101001001 => 2
#870 = 1101100110 => 2
#12 = 1100 =>
# while

# 2진수 bin() 0b ...
# 8진수 oct() 0o ...
# 16진수 hex() 0x ...

# 이진수로 변확
def solution (n) :
  answer = 0
  target = bin(n)
  answerList = []
  target = target[2:]

  # bin 각 자리 수를 돌아가면서 체크
  # 자리 수가 0이다 => 후보값 +=1
  # 자리 수가 1이다 => 후보값을 리스트에 추가
  # 후보값들이 담겨있는 리스트에서 최대값을 return max()
  # 고려사항! 바이너리 0b로 시작한다. => 처리 
    # bin()의 0b를 제거하거나, 최종 answerList에서 0번째 값을 제거한다.

  for i in str(target) :
    if i == '0':
      answer += 1
    elif i == '1':
      answerList.append(answer)
      answer = 0

  # answerList.pop(0)
      
  return print(max(answerList))

solution(999)
solution(239)
solution(870)
solution(12)