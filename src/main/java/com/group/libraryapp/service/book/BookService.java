package com.group.libraryapp.service.book;


import com.group.libraryapp.domain.book.Book;
import com.group.libraryapp.domain.book.BookRepository;
import com.group.libraryapp.domain.user.User;
import com.group.libraryapp.domain.user.UserRepository;
import com.group.libraryapp.domain.user.loanHistory.UserLoanHistoryRepository;
import com.group.libraryapp.dto.book.request.BookCreateRequest;
import com.group.libraryapp.dto.book.request.BookLoanRequest;
import com.group.libraryapp.dto.book.request.BookReturnRequest;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;


@Service
public class BookService {

    // 스프링 컨테이너에서 어떤 repository를 사용할지 결정하는 방식으로 유지보수 비용을 낮춤
    // private final BookRepository bookRepository = new BookMySqlRepository();
    private final BookRepository bookRepository;
    private final UserLoanHistoryRepository userLoanHistoryRepository;
    private final UserRepository userRepository;

    public BookService(
            BookRepository bookRepository,
            UserLoanHistoryRepository userLoanHistoryRepository,
            UserRepository userRepository) {
        this.bookRepository = bookRepository;
        this.userLoanHistoryRepository = userLoanHistoryRepository;
        this.userRepository = userRepository;
    }

    @Transactional
    public void saveBook(BookCreateRequest request){
        bookRepository.save(new Book(request.getName()));
    }

    @Transactional
    public void loanBook(BookLoanRequest request){
        // 1. 책 정보를 가져온다.
        Book book = bookRepository.findByName(request.getBookName())
                .orElseThrow(IllegalArgumentException::new);

        // 2. 대출기록 정보를 확인해서 대출중인지 확인한다.
        // 3. 만약에 확인했는데 대출 중이라면 예외를 발생시킨다.
        if(userLoanHistoryRepository.existsByBookNameAndIsReturn(book.getName(), false)){
            throw new IllegalArgumentException("현재 다른 사용자가 대출 중입니다.");
        }

        // 4. 유저 장보를 가져온다.
        User user = userRepository.findByName(request.getUserName())
                .orElseThrow(IllegalArgumentException::new);
        user.loanBook(book.getName());

        // 5. 유저 정보와 책 정보를 저장한다.
        // casecade 옵션으로 인해 더 이상 UserLoanHistory 객체를 직접적으로 사용하지 않아도 된다.
        // userLoanHistoryRepository.save(new UserLoanHistory(user,request.getBookName()));

    }

    @Transactional
    public void returnBook(BookReturnRequest request){
        User user = userRepository.findByName(request.getUserName())
                .orElseThrow(IllegalArgumentException::new);

        user.returnBook(request.getBookName());
        // User - UserLoanHistory가 서로 협력하도록 수정하면서 코드 주석
        // UserLoanHistory history = userLoanHistoryRepository.findByUserIdAndBookName(user.getId(), request.getBookName())
        //                 .orElseThrow(IllegalArgumentException::new);
        // history.doReturn();
    }

}
