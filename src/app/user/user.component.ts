import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
//Users
export class UserComponent implements OnInit {
  userId:number = 2;
  user: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUserById();
  }

  getUserById(): void {
    this.userService.getUserById(this.userId).subscribe((user) => {
      this.user = user;
    });
  }

  email:string=""
  password:string=""
  onSubmit(){
    console.log(this.email)
  }
}