package com.group.libraryapp.domain.user.loanHistory;

import com.group.libraryapp.domain.user.User;
import jakarta.persistence.*;

@Entity
public class UserLoanHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id = null;

    @JoinColumn(nullable = false)
    @ManyToOne
    // 대출기록 "여러개" 사용자는 "하나"인 관계(N:1)를 알려주는 어노테이션
    private User user;
    //private long userId;

    private String bookName;

    private boolean isReturn;

    protected UserLoanHistory() {}

    public UserLoanHistory(User user, String bookName) {
        this.user = user;
        this.bookName = bookName;
        this.isReturn = false;
    }

    public void doReturn() {
        this.isReturn = true;
    }

    public String  getBookName() {
        return bookName;
    }
}
