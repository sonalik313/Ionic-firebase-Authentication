import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { Properties } from 'src/app/models/properties.models';
import { BehaviorSubject, switchMap } from 'rxjs';


@Component({
  selector: 'app-property',
  templateUrl: './property.page.html',
  styleUrls: ['./property.page.scss'],
})

export class PropertyPage implements OnInit {
 Properties: Properties[];


  // refreshProperties = new BehaviorSubject<boolean>(true);

constructor(private auth:AuthService) { }

  ngOnInit() {
    this.auth.getAllProperties().subscribe((res:any)=>
    {this.Properties=res})
    console.log(this.Properties);
//   this.refreshProperties.subscribe(p => console.log(p));
//  this.Properties = this.Properties.pipe(switchMap(_ =>this.auth.getAllProperties()))
 }


  }





