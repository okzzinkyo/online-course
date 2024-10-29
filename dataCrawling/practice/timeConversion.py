# [과제1 - 요구사항]
# 1.	주제: 시간 변환
# 2.	입력 : 초 단위의 값을 입력한다.
# 3.	출력 : 입력받은 초를 일(day), 시간, 분, 초로 변환하여 출력한다.
# 4.	출력 형식(다음과 같이 출력하도록 하세요. 빨간색 : 입력 값, 검은색 : 출력 값)

# Project: 시간 변환
# 시간을 입력하세요. 1234
# 1234 초는  0 일  0 시간  20 분  34 초입니다.

print('Project: 시간 변환')
total_sec = int(input('시간을 입력하세요. '))

sec = total_sec % 60
minute = (total_sec // 60) % 60
hour = (total_sec // (60*60)) % 24
day =  (total_sec // (60*60*24))

print(total_sec,'초는', day,'일',hour,'시간',minute,'분',sec,'초입니다.') 

