package com.group.libraryapp.dto.assignment.response;

public class CalculatorNumberResponse {
    private int add;
    private int minus;
    private int multiply;

    public CalculatorNumberResponse(int number1, int number2) {
        this.add = number1 + number2;
        this.minus = number1 - number2;
        this.multiply = number1 * number2;
    }

    public int getAdd() {
        return add;
    }

    public int getMinus() {
        return minus;
    }

    public int getMultiply() {
        return multiply;
    }
}
