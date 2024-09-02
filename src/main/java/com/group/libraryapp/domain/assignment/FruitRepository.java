package com.group.libraryapp.domain.assignment;

import com.group.libraryapp.dto.assignment.response.FruitResponse;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface FruitRepository extends JpaRepository<Fruit, Long> {
    List<Fruit> findAllByName(String name);

}
