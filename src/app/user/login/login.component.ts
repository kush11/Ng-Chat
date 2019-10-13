import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { AppService } from './../../app.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: any;
  public password: any;

  constructor(
    public appService: AppService,
    public router: Router,
  ) {


  }

  ngOnInit() {
  }

  public goToSignUp: any = () => {

    this.router.navigate(['/sign-up']);

  } // end goToSignUp

  public signinFunction: any = () => {

    if (!this.email) {
      alert('enter email');


    } else if (!this.password) {

      alert('enter password');


    } else {

      const data = {
        email: this.email,
        password: this.password
      }

      this.appService.signinFunction(data)
        .subscribe((apiResponse) => {

          if (apiResponse.status === 200) {
            console.log(apiResponse);

            Cookie.set('authtoken', apiResponse.data.authToken);

            Cookie.set('receiverId', apiResponse.data.userDetails.userId);

            Cookie.set('receiverName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);

            this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);

            this.router.navigate(['/chat']);

          } else {

            alert(apiResponse.message);


          }

        }, (err) => {
          alert('some error occured');

        });

    } // end condition

  } // end signinFunction

}
