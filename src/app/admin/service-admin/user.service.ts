import { AppConstants } from 'src/app/app-constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../model/User';


@Injectable({
    providedIn: 'root'
  })
  


export class userService {


    constructor(private http: HttpClient) {}


    salvarContato(user : User) : Observable<any>{

        return this.http.post<any>(AppConstants.getbaseUrlPath + 'adm/', user);
      
      }


    

}