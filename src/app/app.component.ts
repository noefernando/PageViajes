import { Component, OnInit } from '@angular/core';
import { UserService } from '../app/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'viajes';
  user: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.userService.getUserById(1).subscribe((user) => {
      this.user = user;
    });
  }
}
