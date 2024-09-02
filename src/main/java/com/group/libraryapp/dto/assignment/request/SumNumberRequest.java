package com.group.libraryapp.dto.assignment.request;

import java.util.Collection;
import java.util.List;

public class SumNumberRequest {
    private List <Integer> numbers;

    public SumNumberRequest() {
    }

    public SumNumberRequest(List<Integer> numbers) {
        this.numbers = numbers;
    }

    public List<Integer> getNumbers() {
        return numbers;
    }

    public int getTotal(){
        int total = 0;
        for (int number : numbers) {
            total += number;
        }

        return total;
    }
}
