import { AppConstants } from 'src/app/app-constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Reserva } from '../model/Reserva';

@Injectable({
    providedIn: 'root'
  })
  


export class ReservaAdminService {

  
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
  };

    constructor(private http: HttpClient) {}


    salvarReserva(reserva: Reserva) : Observable<any>{

        return this.http.post<any>(AppConstants.baseUrl, reserva);
      
      }

      updateReserva(reserva: Reserva) : Observable<any>{

        return this.http.put<any>(AppConstants.getbaseUrlPath + 'adm/', reserva, this.httpOptions);
      
      }
      buscarReserva() : Observable<any>{

        return this.http.get<any>(AppConstants.getbaseUrlPath + 'home/reserva');
      
      }

      getQntDeReservar(): Observable<any>{

        return this.http.get<any>(AppConstants.getbaseUrlPath + 'home/qnt');
       }


      getReservaListPage(pagina: number): Observable<any> {    
        return this.http.get<any>(AppConstants.getbaseUrlPath + 'home/page/' + pagina);
       }
    
}