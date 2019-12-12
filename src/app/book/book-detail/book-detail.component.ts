import {Component, OnInit, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

import {BookService} from '../book.service';
import {Book} from '../book';
import {BookDetail} from '../book-detail';

@Component({
    selector: 'app-book-detail',
    templateUrl: './book-detail.component.html',
    styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit, OnDestroy 
{

    /**
    * The constructor of the component
    * @param bookService The book service which communicates with the API
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param router The router which is needed to know when the component needs to reload
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private bookService: BookService,
        private route: ActivatedRoute,
        private modalDialogService: ModalDialogService,
        private router: Router,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService
    ) {
        //This is added so we can refresh the view when one of the books in
        //the "Other books" list is clicked
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.ngOnInit();
            }
        });
    }

    book_id: number;

    bookDetail: BookDetail;

    other_books: Book[];

    navigationSubscription;


    getBookDetail(): void {
        this.bookService.getBookDetail(this.book_id)
            .subscribe(bookDetail => {
                this.bookDetail = bookDetail;
            });
    }

    /**
    * This method retrieves all the books in the Bookstore to show them in the list
    */
    getOtherBooks(): void {
        this.bookService.getBooks()
            .subscribe(books => {
                this.other_books = books;
                this.other_books = this.other_books.filter(book => book.id !== this.book_id);
            });
    }

   ngOnInit() {
        this.book_id = +this.route.snapshot.paramMap.get('id');
        this.bookDetail = new BookDetail();
        this.getBookDetail();
        this.getOtherBooks();
    }

    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
}
