import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Cliente } from '../cliente/cliente';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(private userService:UserService) { }
  private cliente:Cliente;
  ngOnInit() {
    this.cliente=new Cliente();
    this.userService.getCliente(1).subscribe(cliente=>{
      this.cliente=cliente;
     });
  }

}
