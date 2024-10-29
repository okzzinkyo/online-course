package com.group.libraryapp.dto.assignment.response;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.format.TextStyle;
import java.util.Locale;

public class DayOfTheWeekResponse {
    private String dayOfTheWeek;

    public DayOfTheWeekResponse(LocalDate date) {
        // dayOfWeek 객체 구하기
        DayOfWeek dayOfWeek = date.getDayOfWeek();
        // 텍스트 요일을 추출 및 알맞는 데이터 형식으로 변환
        this.dayOfTheWeek = dayOfWeek.getDisplayName(TextStyle.SHORT, Locale.US).toUpperCase();
    }

    public String getDayOfTheWeek() {
        return dayOfTheWeek;
    }
}
