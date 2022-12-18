import { AppConstants } from '../app-constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  


export class MenuService {


    constructor(private http: HttpClient) {}


    buscarMenu() : Observable<any>{

        return this.http.get<any>(AppConstants.baseUrl);
      
      }

}