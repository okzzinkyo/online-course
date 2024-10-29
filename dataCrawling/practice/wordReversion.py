# 1.	주제 : 단어 뒤집기
# 2.	입력 : 10자 이내의 단어를 입력받는다.
# 3.	출력 : 단어를 뒤집어서 출력한다.
# 4.	출력 형식(다음과 같이 출력하도록 하세요. 빨간색 : 입력 값, 검은색 : 출력 값)

# Project: 단어 뒤집기
# 단어(10자 이내)? abcdefg
# gfedcba

print('Project: 단어 뒤집기')
word1 = input('단어(10자 이내)? ')
word2 = word1[8:9]+word1[7:8]+word1[6:7]+word1[5:6]+word1[4:5]+word1[3:4]+word1[2:3]+word1[1:2]+word1[0:1]

print(word2)

# word1[8:9] != word1[8]
# word1[8:9] 없어도 에러 출력X
# word[8] 해당 index가 없으면 에러 출력
