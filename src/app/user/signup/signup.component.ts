import { Component, OnInit } from '@angular/core';
import { AppService } from './../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public firstName: any;
  public lastName: any;
  public mobile: any;
  public email: any;
  public password: any;
  public apiKey: any;

  constructor(
    public appService: AppService,
    public router: Router,
  ) {

  }

  ngOnInit() {
  }

  public goToSignIn: any = () => {

    this.router.navigate(['/']);

  } // end goToSignIn

  public signupFunction: any = () => {

    if (!this.firstName) {
      alert('enter first name');


    } else if (!this.lastName) {
      alert('enter last name');

    } else if (!this.mobile) {
      alert('enter mobile');

    } else if (!this.email) {
      alert('enter email');

    } else if (!this.password) {
      alert('enter password');


    } else if (!this.apiKey) {
      alert('Enter your API key');

    } else {

      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        mobile: this.mobile,
        email: this.email,
        password: this.password,
        apiKey: this.apiKey
      };

      console.log(data);

      this.appService.signupFunction(data)
        .subscribe((apiResponse) => {

          console.log(apiResponse);

          if (apiResponse.status === 200) {

            alert('Signup successful');

            setTimeout(() => {

              this.goToSignIn();

            }, 2000);

          } else {

            alert(apiResponse.message);

          }

        }, (err) => {

          alert('some error occured');

        });

    } // end condition

  } // end signupFunction

}
