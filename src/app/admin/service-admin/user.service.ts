import { AppConstants } from 'src/app/app-constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../model/User';


@Injectable({
    providedIn: 'root'
  })
  


export class userService {


    httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        })
      };

    constructor(private http: HttpClient) {}


    salvarUsuario(user : User) : Observable<any>{

        return this.http.post<any>(AppConstants.getbaseUrlPath + 'adm/', user);
      
      }

      buscarUsuario() : Observable<any>{

        return this.http.get<any>(AppConstants.getbaseUrlPath + 'adm/');
      
      }

      getUsuario(id: string) : Observable<any>{

        return this.http.get<any>(AppConstants.getbaseUrlPath + 'adm/' + id) 
      
      }

      updateUsuario(user: User) : Observable<any>{

        return this.http.put<any>(AppConstants.getbaseUrlPath + 'adm/', user, this.httpOptions);
      
      }

      deletarUsuario(id: Number) : Observable<any>{
        return this.http.delete(AppConstants.getbaseUrlPath + 'adm/' + id, {responseType : 'text'});
      }
      
      consultarUserPoPage(nome: String, page : Number): Observable<any> {
        return this.http.get(AppConstants.getbaseUrlPath + 'adm/'  + "usuarioPorNome/" + nome + "/page/" + page);
      
      }
      getUserListPage(pagina: Number): Observable<any> {    
        return this.http.get<any>(AppConstants.getbaseUrlPath + 'adm/'+ 'page/' + pagina);
       }
    
       getQntDeUser(): Observable<any>{

        return this.http.get<any>(AppConstants.getbaseUrlPath + 'adm/qnt');
       }

}