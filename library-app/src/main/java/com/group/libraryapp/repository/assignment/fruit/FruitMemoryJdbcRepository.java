package com.group.libraryapp.repository.assignment.fruit;

import org.springframework.stereotype.Repository;

import java.time.LocalDate;

@Repository
public class FruitMemoryJdbcRepository implements FruitJdbcRepository {
    @Override
    public void saveFruit(String name, LocalDate date, long price) {
        System.out.println("FruitMemoryRepository");
    }
}
