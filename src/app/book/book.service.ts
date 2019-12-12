import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Book} from './book';
import { BookDetail}  from './book-detail';


import {environment} from '../../environments/environment';
import { Cliente } from '../cliente/cliente';
import { UserService } from '../user/user.service';
const API_URL = environment.apiURL;
const books = '/books';


/**
* The service provider for everything related to books
*/
@Injectable()
export class BookService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient, private userService:UserService) {}
    cliente:Cliente;
    /**
    * Returns the Observable object containing the list of books retrieved from the API
    * @returns The list of books in real time
    */
    getBooks(): Observable<Book[]> {
        return this.http.get<Book[]>(API_URL + books);
    }

    getBooksDetails(bookId) : Observable<BookDetail>
    {
        return this.http.get<BookDetail>(API_URL + books + '/' + bookId);
    }

    addCarrito(bookId):void
    {
       this.userService.getCliente(1).subscribe(cliente=>{
        this.cliente=cliente;
        this.cliente.carritoDeCompras.concat(bookId);
        this.userService.put(this.cliente);
       });
    }

}
