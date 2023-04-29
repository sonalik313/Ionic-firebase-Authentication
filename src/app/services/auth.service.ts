import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Properties } from 'src/app/models/properties.models';
import { map, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url1 ='https://us-central1-retepoc-8adf7.cloudfunctions.net/getpropertiesByPropertyId/?id=';
  // url = 'https://fakestoreapi.com/products';
  url = 'https://us-central1-retepoc-8adf7.cloudfunctions.net/getproperties';
  httpHeaders= new HttpHeaders().set('content-Type','application/json')


  constructor(private http:HttpClient) { }




  getAllProperties():Observable<any>{
    return this.http.get(this.url)

  }


  getPropertiesByPropertyId(property_id:string):Observable<Properties> {

    return this.http.get<Properties>(`${this.url1}/${property_id}`,{headers:this.httpHeaders} )
    .pipe(map((res:any)=>
    {
      // console.log("abcd",res);
      return res || {};
    }),

    )
  }



}
