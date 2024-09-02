package com.group.libraryapp.repository.assignment.fruit;

import com.group.libraryapp.dto.assignment.response.FruitResponse;
import org.springframework.context.annotation.Primary;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.List;

@Primary
@Repository
public class FruitMySqLJdbcRepository implements FruitJdbcRepository {

    JdbcTemplate jdbcTemplate;

    public FruitMySqLJdbcRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public void saveFruit(String name, LocalDate date, long price) {
        System.out.println("FruitMySqLRepository");
        String sql = "INSERT INTO fruit (name, warehousing_date, price, is_sold) VALUES (?, ?, ?, false)";
        jdbcTemplate.update(sql, name, date,price);
    }

    @Override
    public void updateFruit(long id){
        String sql = "UPDATE fruit SET is_sold = true WHERE id = ?";
        jdbcTemplate.update(sql,id);
    }

    @Override
    public List<FruitResponse> getFruitStatus(String name) {
        //TODO - salesAmount, notSalesAmount을 구하는 sql 구문 수정 필요
        String sql = "SELECT\n" +
                "SUM(CASE WHEN is_sold = TRUE THEN price ELSE 0 END) AS salesAmount,\n" +
                "SUM(CASE WHEN is_sold = FALSE THEN price ELSE 0 END) AS notSalesAmount\n" +
                "FROM fruit WHERE name = ?";

        return jdbcTemplate.query(sql, new Object[]{name}, new RowMapper<FruitResponse>() {
            @Override
            public FruitResponse mapRow(ResultSet rs, int rowNum) throws SQLException {
                long salesAmount = rs.getLong("salesAmount");
                long notSalesAmount = rs.getLong("notSalesAmount");

                return new FruitResponse(salesAmount, notSalesAmount);
            }
        });
    }
}
