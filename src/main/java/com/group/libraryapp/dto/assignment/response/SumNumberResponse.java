package com.group.libraryapp.dto.assignment.response;

import java.util.List;

// 응답 결과를 json 타입으로 보내고 싶을 때 response dto 활용
public class SumNumberResponse {
    private  int total;

    public SumNumberResponse(List<Integer> numbers) {
        for (int number : numbers) {
            this.total += number;
        }
    }

    public int getTotal() {
        return total;
    }
}
