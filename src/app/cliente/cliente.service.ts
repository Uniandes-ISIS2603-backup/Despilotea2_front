import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Cliente } from "./cliente";
import { Observable } from "rxjs";
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const clientes = "/clientes";

@Injectable()
export class ClienteService {

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(API_URL + clientes);
  }

  getUsuario(clienteUser): Observable<Cliente> {
    return this.http.get<Cliente>(API_URL +clientes+'/user/'+clienteUser);
  }

      /**
    * Creates an author
    * @param author The new author
    * @returns The confirmation that the author was created
    */
   createCliente(cliente): Observable<Cliente> {
    return this.http.post<Cliente>(API_URL + clientes, cliente);
}
}
