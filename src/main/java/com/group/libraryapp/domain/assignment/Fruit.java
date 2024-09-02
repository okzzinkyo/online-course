package com.group.libraryapp.domain.assignment;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class Fruit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false, length = 20, name = "name")
    private String name;

    @Column(nullable = false, name="warehousing_date")
    private LocalDate warehousingDate;

    private long price;

    @Column(nullable = false, name = "is_sold")
    private boolean isSold;

    protected Fruit() {}

    public Fruit(String name, LocalDate warehousingDate, long price) {
        this.name = name;
        this.warehousingDate = warehousingDate;
        this.price = price;
    }

    public Fruit(long price, boolean isSold) {
        this.price = price;
        this.isSold = isSold;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public boolean getIsSold() {
        return isSold;
    }

    public LocalDate getWarehousingDate() {
        return warehousingDate;
    }

    public long getPrice() {
        return price;
    }

    public boolean isSold() {
        return isSold;
    }

    public  void updateIsSold(boolean sold) {
        this.isSold = true;
    }
}
