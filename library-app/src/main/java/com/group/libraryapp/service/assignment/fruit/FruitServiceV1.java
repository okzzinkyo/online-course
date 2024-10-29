package com.group.libraryapp.service.assignment.fruit;

import com.group.libraryapp.dto.assignment.request.FruitCreateRequest;
import com.group.libraryapp.dto.assignment.request.FruitUpdateRequest;
import com.group.libraryapp.dto.assignment.response.FruitResponse;
import com.group.libraryapp.repository.assignment.fruit.FruitJdbcRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FruitServiceV1 {
    private final FruitJdbcRepository fruitJdbcRepository;

    public FruitServiceV1(FruitJdbcRepository fruitJdbcRepository) {
        this.fruitJdbcRepository = fruitJdbcRepository;
    }

    public void saveFruit(FruitCreateRequest request){
        fruitJdbcRepository.saveFruit(request.getName(), request.getWarehousingDate(), request.getPrice());
    }

    public void updateFruit(FruitUpdateRequest request){
        fruitJdbcRepository.updateFruit(request.getId());
    }

    public List<FruitResponse> getFruitStatus(String name){
        return fruitJdbcRepository.getFruitStatus(name);
    }
}
