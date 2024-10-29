# [과제2 - 요구사항]
# 1.	주제 : BMI 계산기
# 2.	입력 : 키, 몸무게 두 개의 값을 입력받는다.
# 3.	출력 : BMI 값을 출력한다.(소숫점 첫번째 자리까지)
# 4.	출력 형식(다음과 같이 출력하도록 하세요. 빨간색 : 입력 값, 검은색 : 출력 값)

# Project: BMI 계산기
# 키(cm)? 178
# 몸무게(kg)? 65
# BMI 지수는 20.5 입니다.

print('Project: BMI 계산기')
height = float(input('키(cm)? ')) / 100
weight = float(input('몸무게(kg)? '))

# 신체질량지수(BMI) = 체중(kg) / [신장(m)]2
# BMI =  round((weight / pow(height,2)),1)
BMI =  weight / pow(height,2)
print('BMI 지수는 %.1f 입니다.' %(BMI))

# %f 포맷 - 소숫점 6번째 자리까지 보여줌
# %.1f - 소숫점 1번째 자리까지 보여줌 
# round(반올림)함수를 사용하지 않아도 반올림해서 표현해준다.