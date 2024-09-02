package com.group.libraryapp.controller.assignment;

import com.group.libraryapp.dto.assignment.request.SumNumberRequest;
import com.group.libraryapp.dto.assignment.response.CalculatorNumberResponse;
import com.group.libraryapp.dto.assignment.request.CalculatorNumberRequest;
import com.group.libraryapp.dto.assignment.response.DayOfTheWeekResponse;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController // api 시작을 알리는 annotation
public class PracticeMakeAPIController {
    @GetMapping("/api/v1/calc") // api 메소드 + path
    public CalculatorNumberResponse calculatorNumber(CalculatorNumberRequest request){
        return new CalculatorNumberResponse(request.getNumber1(),request.getNumber2());
    }

    @GetMapping("/api/v1/day-of-the-week")
    public  DayOfTheWeekResponse getDayOfTheWeek(@RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate date) {
        return new DayOfTheWeekResponse(date);
    }

    @PostMapping("/api/v1/sum-number")
    public int sumNumbers(@RequestBody SumNumberRequest request){
        return request.getTotal();

        // response dto를 사용했을 때, 결과를 반환하는 코드
        // return new SumNumberResponse(request.getNumbers());
    }
}
