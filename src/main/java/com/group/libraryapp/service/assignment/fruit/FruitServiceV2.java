package com.group.libraryapp.service.assignment.fruit;

import com.group.libraryapp.domain.assignment.Fruit;
import com.group.libraryapp.domain.assignment.FruitRepository;
import com.group.libraryapp.dto.assignment.request.FruitCreateRequest;
import com.group.libraryapp.dto.assignment.request.FruitUpdateRequest;
import com.group.libraryapp.dto.assignment.response.FruitResponse;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
public class FruitServiceV2 {
    private final FruitRepository fruitRepository;

    public FruitServiceV2(FruitRepository fruitRepository) {
        this.fruitRepository = fruitRepository;
    }

    @PostMapping("/api/v1/fruit")
    public void saveFruit(@RequestBody FruitCreateRequest request){
        fruitRepository.save(new Fruit(request.getName(),request.getWarehousingDate(),request.getPrice()));
    }

    @PutMapping("/api/v1/fruit")
    public void updateFruit(@RequestBody FruitUpdateRequest request){
        Fruit fruit = fruitRepository.findById(request.getId()).orElseThrow(IllegalArgumentException::new);
        fruit.updateIsSold(true);
        fruitRepository.save(fruit);
    }

//    @GetMapping("/api/v1/fruit/stat")
//    public Optional<FruitResponse> getFruitStatus(@RequestParam String name){
//
//    }
}
