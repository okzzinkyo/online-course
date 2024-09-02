package com.group.libraryapp.dto.assignment.request;

import java.time.LocalDate;

public class FruitCreateRequest {
    String name;
    LocalDate warehousingDate;
    long price;

    public FruitCreateRequest(String name, LocalDate warehousingDate, long price) {
        this.name = name;
        this.warehousingDate = warehousingDate;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public LocalDate getWarehousingDate() {
        return warehousingDate;
    }

    public long getPrice() {
        return price;
    }
}
