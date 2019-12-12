import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';
import { Cliente } from '../../cliente/cliente';

@Component({
    selector: 'app-user-sign-up',
    templateUrl: './user-sign-up.component.html',
    styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {

    /**
    * Constructor for the component
    * @param userService Auth service provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private userService: UserService,
        private toastrService: ToastrService,
        ) { }

    user: Cliente;
    @Output() create = new EventEmitter();

    /**
    * Sign the user up with the selected role
    */
    signUp(): Cliente {
        this.userService.login('CLIENT');
        this.toastrService.success('Successfully signed up')
        this.userService.signUp(this.user).subscribe((user) => {
            this.user = user;
            this.create.emit();
          this.toastrService.success("The cliente was created", "cliente creation");
        }, err => {
            this.toastrService.error(err, "Error");
        });
    return this.user;
    }  

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.user = new Cliente();
    }

}
