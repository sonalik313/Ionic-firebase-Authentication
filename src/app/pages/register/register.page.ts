import { Component, OnInit } from '@angular/core';
import { AngularFireAuth,} from '@angular/fire/compat/auth';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { User } from 'src/app/models/user.model';
import {  ActionCodeSettings, sendEmailVerification } from "firebase/auth";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Auth, user } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email:any;
  password:any;
  constructor(private afauth:AngularFireAuth,
              private navCtrl:NavController,) { }

Register(){


this.afauth.createUserWithEmailAndPassword( this.email, this.password)
  .then((res) => {

    console.log('response = ', res);





  this.navCtrl.navigateForward('login')
  })
  .catch((error) => {
throw error;

  });
}



  ngOnInit() {
  }

}
