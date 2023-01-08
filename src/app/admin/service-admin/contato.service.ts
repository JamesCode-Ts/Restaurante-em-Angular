import { AppConstants } from 'src/app/app-constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Contato } from '../model/contato';

@Injectable({
    providedIn: 'root'
  })
  


export class ContatoAdminService {

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
  };


    constructor(private http: HttpClient) {}


  

      buscarContato() : Observable<any>{

        return this.http.get<any>(AppConstants.getbaseUrlPath + 'contato/');
      }

   
      
      deletarContato(id: Number) : Observable<any>{
        return this.http.delete(AppConstants.getbaseUrlPath + 'contato/' + id, {responseType : 'text'});
      }
      
      
      
    
}