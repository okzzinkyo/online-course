package com.group.libraryapp.domain.user;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    // find는 한개의 데이터만 가져오기 때문에 User 객체로 받는다.
    // User findByName(String name);

    // 반환 타입이 Optional<타입>이 될 수도 있다.
    Optional<User> findByName(String name);

    // 이름 존재 여부를 확인하는 함수 생성해서 null point 분기 가능
    // boolean existsByName(String name);

    // 해당 age의 user 수를 구해서 반환
    long countByAge(Integer age);
}
