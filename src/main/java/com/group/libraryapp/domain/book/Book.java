package com.group.libraryapp.domain.book;

import jakarta.persistence.*;

@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    // length = 255 (기본 설정 값 생략가능)
    // name = "name" (DB 컬럼과 이름이 동일 생략가능)
    private String name;

    protected Book() {}

    public Book(String name) {
        if(name == null || name.isBlank()) {
            throw new IllegalArgumentException("Book name cannot be null or empty");
        }
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
