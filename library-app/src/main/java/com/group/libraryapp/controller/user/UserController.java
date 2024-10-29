package com.group.libraryapp.controller.user;

import com.group.libraryapp.dto.user.request.UserCreateRequest;
import com.group.libraryapp.dto.user.request.UserUpdateRequest;
import com.group.libraryapp.dto.user.response.UserResponse;
import com.group.libraryapp.service.user.UserServiceV2;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    private final UserServiceV2 userService;

    //  private final List<User> users = new ArrayList<>();
    //  userService을 스프링빈으로 등록해서 더이상 jdbcTemplate를 전달할 필요없다.
    //  private final JdbcTemplate jdbcTemplate;

    public UserController(UserServiceV2 userService) {
        //  this.jdbcTemplate = jdbcTemplate;
        //  this.userService = new UserService(jdbcTemplate);
        this.userService = userService;
    }

    @PostMapping("/user")  //POST /user
    public void saveUser(@RequestBody UserCreateRequest request) {
        // UserService로 기능 분리
        userService.saveUser(request);

        // DB 연결로 인한 주석
        // users.add(new User(request.getName(), request.getAge()));
    }

    @GetMapping("/user")
    public List<UserResponse> getUsers() {
        // UserService로 기능 분리
        return userService.getAllUsers();

        // DB 연결로 인한 주석
        // List<UserResponse> responses = new ArrayList<>();
        // for(int i= 0; i < users.size(); i++){
        //     responses.add(new UserResponse((long) (i + 1), users.get(i)));
        // }

        // return responses;
    }

    @PutMapping("/user")
    public void updateUser(@RequestBody UserUpdateRequest request){
        // UserService로 기능 분리
        userService.updateUser(request);
    }

    @DeleteMapping("/user")
    public void deleteUser(@RequestParam String name){
        userService.deleteUser(name);
    }
}
