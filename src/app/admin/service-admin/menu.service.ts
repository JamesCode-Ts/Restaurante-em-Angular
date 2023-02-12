import { AppConstants } from 'src/app/app-constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Menu } from '../model/Menu';



@Injectable({
    providedIn: 'root'
  })



  export class menuAdminService {


    httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    };

    
    constructor(private http: HttpClient) {}


    salvarMenu(menu : Menu) : Observable<any>{

        return this.http.post<any>(AppConstants.getbaseUrlPath + 'menu/', menu);
      
      }

      getMenu(id: string) : Observable<any>{

        // tu tem que passar esse httpOptions em todas as requisições de todos os services.ok
        

        return this.http.get<any>(AppConstants.getbaseUrlPath + 'menu/' + id, this.httpOptions) 
      
      }
      
      buscarMenu() : Observable<any>{

        return this.http.get<any>(AppConstants.getbaseUrlPath + 'menu/', this.httpOptions);
      
      }

      deletarMenu(id: Number) : Observable<any>{
        return this.http.delete(AppConstants.getbaseUrlPath + 'menu/' + id, {responseType : 'text'});
      }

      updateMenu(menu: Menu) : Observable<any>{

        return this.http.put<any>(AppConstants.getbaseUrlPath + 'menu/', menu, this.httpOptions);
      
      }
      getQntDeMenu(): Observable<any>{

        return this.http.get<any>(AppConstants.getbaseUrlPath + 'menu/qnt', this.httpOptions);
       }

       

  }