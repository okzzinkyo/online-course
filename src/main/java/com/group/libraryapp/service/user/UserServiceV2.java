package com.group.libraryapp.service.user;

import com.group.libraryapp.domain.user.User;
import com.group.libraryapp.domain.user.UserRepository;
import com.group.libraryapp.dto.user.request.UserCreateRequest;
import com.group.libraryapp.dto.user.request.UserUpdateRequest;
import com.group.libraryapp.dto.user.response.UserResponse;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceV2 {
    private final UserRepository userRepository;

    public UserServiceV2(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // 아래 있는 함수가 시작될 때 start transaction;을 해준다(트랜잭션 시작)
    // 함수가 예외 없이 잘 끝났다면 commit
    // 혹시라도 문제가 있다면 rollback
    @Transactional
    public void saveUser(UserCreateRequest request){
        userRepository.save(new User(request.getName(),request.getAge()));
    }

    @Transactional
    public List<UserResponse> getAllUsers(){
        // findAll - 테이블의 모든 데이터를 가져옴
        // List<User> users = userRepository.findAll();
        // return users.stream().map(user -> new UserResponse(user.getId(),user.getName(),user.getAge())).collect(Collectors.toList());

        // 더 깔끔하게 정리
        return userRepository.findAll().stream()
                .map(u -> new UserResponse(u.getId(),u.getName(),u.getAge()))
                .collect(Collectors.toList());

        // UserResponse에서 User를 받는 생성자를 바로 사용하면 더 깔끔하게 정리 가능
        // Java 8 버전의 stream을 활용
        // return userRepository.findAll().stream()
        //         .map(UserResponse::new)
        //         .collect(Collectors.toList());
    }

    @Transactional
    public void updateUser(UserUpdateRequest request){
        // findById(id) : id를 기준으로 특정 한개의 데이터 조회
        // select * from user where id = ?;
        // Optional<User>
        User user = userRepository.findById(request.getId())
                .orElseThrow(IllegalArgumentException::new);

        // user 객체의 이름을 먼저 변경
        user.updateName(request.getName());
        // 자동으로 유저의 이름이 바뀐 것을 확인하고 update 쿼리를 날림
        // 트랜잭션에 의해 생긴 영속성 컨텍스트안 Entity는 따로 저장하지 않아도 자동 저장되므로 주석해도 기능에 문제가 없음.
        // userRepository.save(user);
    }

    @Transactional
    public void deleteUser(String name){

        // findByName .............
        // Spring Data JPA에는 findByName 함수는 존재 않지 않는다.
        // UserRepository에 함수(findByName)를 작성해준다.
        // find는 1개의 데이터만 가져온다.(List가 아닌 User 객체로 받는다.)
        // By 뒤 필드 이름으로 select 쿼리의 where 구문이 나간다.

        // 반환 타입이 객체일 경우 .............
        // User user = userRepository.findByName(name);
        // if(user == null){
        //     throw new IllegalArgumentException();
        // }

        // user의 존재 여부 확인은 exist를 활용할 수도 있다.
        // if(!userRepository.existsByName(name)){
        //     throw new IllegalArgumentException("User not found");
        // }

        // 반환 타입이 Optional<타입>이 될 경우 .............
        User user = userRepository.findByName(name)
                        .orElseThrow(IllegalArgumentException::new);

        userRepository.delete(user);
    }
}
