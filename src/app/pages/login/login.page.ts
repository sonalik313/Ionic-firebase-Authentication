import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { User } from 'src/app/models/user.model';
import { user } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {





  email:any;
  password:any;



  constructor(
    private afauth:AngularFireAuth,
    private navCtrl:NavController) { }



Login(){
  this.afauth.
  signInWithEmailAndPassword( this.email, this.password)
    .then((res) => {
      console.log('response = ', res)



this.afauth.onAuthStateChanged( (user) => {
  if (user?.email && !user.emailVerified) {
      this.email= user.sendEmailVerification();


  } else if (user?.email && user?.emailVerified) {

    this.navCtrl.navigateRoot("property");
  } else {

     this.navCtrl.navigateRoot("register")

  }
});
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  }


  ngOnInit() {
  }

}





