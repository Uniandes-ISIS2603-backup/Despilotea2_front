import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { BookService } from './book.service';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule
  ],
  declarations: [BookListComponent], 
    exports: [BookListComponent],
    providers: [BookService]
})
export class BookModule { }