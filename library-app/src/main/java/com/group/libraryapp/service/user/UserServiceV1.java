package com.group.libraryapp.service.user;

import com.group.libraryapp.dto.user.request.UserCreateRequest;
import com.group.libraryapp.dto.user.request.UserUpdateRequest;
import com.group.libraryapp.dto.user.response.UserResponse;
import com.group.libraryapp.repository.user.UserJdbcRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceV1 {
    private final UserJdbcRepository userJdbcRepository;

    public UserServiceV1(UserJdbcRepository userJdbcRepository) {
        // jdbc driver 변수에 담아 전달
        // userRepository을 스프링빈으로 등록해서 더이상 jdbcTemplate를 전달할 필요없다.
        // userRepository = new UserRepository(jdbcTemplate);
        this.userJdbcRepository = userJdbcRepository;
    }

    public void saveUser(UserCreateRequest request){
        userJdbcRepository.saveUser(request.getName(), request.getAge());
    }

    public List<UserResponse> getAllUsers(){
        return userJdbcRepository.getAllUsers();
    }

    public void updateUser(UserUpdateRequest request) {
        // 실제 DB와 통신을 하는 부분을 Repository에서 관리
        if (userJdbcRepository.isUserNotExist(request.getId())) {
            throw new IllegalArgumentException();
        }

        userJdbcRepository.updateUserName(request.getName(), request.getId());
    }

    public void deleteUser(String name) {
        // 이름이 존재하지 않을 때, 예외 처리
        if (userJdbcRepository.isUserNotExist(name)) {
            throw new IllegalArgumentException();
        }

        userJdbcRepository.deleteUser(name);
    }
}
