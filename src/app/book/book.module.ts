import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { BookService } from './book.service';
import { FormsModule }   from '@angular/forms';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { FilterPipe }from './filter.pipe';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule
  ],
  declarations: [BookListComponent, BookDetailComponent, FilterPipe], 
    exports: [BookListComponent],
    providers: [BookService]
})
export class BookModule { }