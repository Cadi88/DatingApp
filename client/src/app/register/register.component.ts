import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Output() cancelRegisterMode = new EventEmitter();

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {}

  register(): void {
    this.accountService.register(this.model).subscribe(
      (response) => {
        console.log(response);
        this.cancel();
      },
      (err) => console.log(err)
    );
  }

  cancel(): void {
    this.cancelRegisterMode.emit(false);
    console.log('register form canceled');
  }
}
