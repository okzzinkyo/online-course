package com.group.libraryapp.repository.assignment.fruit;

import com.group.libraryapp.dto.assignment.response.FruitResponse;

import java.time.LocalDate;
import java.util.List;

public interface FruitJdbcRepository {
    default void saveFruit(String name, LocalDate date, long price) {

    }

    default void updateFruit(long id){

    }

    default List<FruitResponse> getFruitStatus(String name) {
        return null;
    }
}
