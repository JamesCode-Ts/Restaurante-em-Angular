import { AppConstants } from '../app-constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Contato } from '../model/contato';

@Injectable({
    providedIn: 'root'
  })
  


export class ContatoService {


    constructor(private http: HttpClient) {}


    salvarContato(contato : Contato) : Observable<any>{

        return this.http.post<any>(AppConstants.getbaseUrlPath + 'contato/', contato);
      
      }

}