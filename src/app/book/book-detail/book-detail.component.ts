import { BookService } from '../book.service';
import { BookDetail } from '../book-detail';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})

export class BookDetailComponent implements OnInit {
  /**
      * la ficha tecnica
      */
  @Input() bookDetail: BookDetail;

  /**
* El id de la ficha tecnica que viene en el path get .../administradores/administradores_id
*/
bookId: number;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

addCarrito(idBook):void{
  this.bookService.addCarrito(idBook);
}

  /**
  * El metodo que obtiene el detalle de la ficha tecnica que queremos mostrar
  */
  getBookDetail(): void {
    this.bookService.getBooksDetails(this.bookId)
      .subscribe(bookDetail => {
        this.bookDetail = bookDetail
      });
  }

  ngOnInit() {

    this.bookId = +this.route.snapshot.paramMap.get('id');
    if (this.bookId) {
      this.bookDetail = new BookDetail();
      this.getBookDetail();
    }
  }
}