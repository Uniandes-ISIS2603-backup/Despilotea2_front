import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';


import {Book} from '../book';
import {BookService} from '../../book/book.service';
@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: []
})
export class BookListComponent implements OnInit {

    @Input() books: Book[];

    constructor(private bookService: BookService, private route: ActivatedRoute) {}

    allbooks: string = 'no';

    getBooks(): void {
        this.bookService.getBooks()
            .subscribe(books => {
                this.books = books;
            });
    }

    ngOnInit() 
    {
        this.getBooks();
    }

}
