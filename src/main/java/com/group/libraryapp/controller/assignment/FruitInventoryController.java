package com.group.libraryapp.controller.assignment;

import com.group.libraryapp.dto.assignment.request.FruitCreateRequest;
import com.group.libraryapp.dto.assignment.request.FruitUpdateRequest;
import com.group.libraryapp.service.assignment.fruit.FruitServiceV2;
import org.springframework.web.bind.annotation.*;

@RestController
public class FruitInventoryController {
//    private final JdbcTemplate jdbcTemplate;
//
//    public FruitInventoryController(JdbcTemplate jdbcTemplate) {
//        this.jdbcTemplate = jdbcTemplate;
//    }
    private final FruitServiceV2 fruitService;

    public FruitInventoryController(FruitServiceV2 fruitService) {
        this.fruitService = fruitService;
    }

    @PostMapping("/api/v1/fruit")
    public void saveFruit(@RequestBody FruitCreateRequest request){
        fruitService.saveFruit(request);
    }

    @PutMapping("/api/v1/fruit")
    public void updateFruit(@RequestBody FruitUpdateRequest request){
        fruitService.updateFruit(request);
    }

//    @GetMapping("/api/v1/fruit/stat")
//    public List<FruitResponse> getFruitStatus(@RequestParam String name){
//        return fruitService.getFruitStatus(name);
//    }
}
