import { Component } from '@angular/core';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'maratones';

  constructor(private userService:UserService)
{
  
}
  ngOnInit():void
  {
    this.userService.start();
    
  }

  logout():id{
    this.userService.logout();
    }
}
