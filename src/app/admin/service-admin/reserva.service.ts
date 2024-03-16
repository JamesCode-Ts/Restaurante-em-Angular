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

        const id = reserva.id;

        return this.http.put<any>(AppConstants.getbaseUrlPath + 'home/' + id, reserva, this.httpOptions);
      
      }
      buscarReserva() : Observable<any>{

        return this.http.get<any>(AppConstants.getbaseUrlPath + 'home/reserva');
      
      }
      getReserva(id: string) : Observable<any>{

        return this.http.get<any>(AppConstants.getbaseUrlPath + 'home/reserva/' + id) 
      
      }

      getQntDeReservar(): Observable<any>{

        return this.http.get<any>(AppConstants.getbaseUrlPath + 'home/qnt');
       }


      getReservaListPage(pagina: number): Observable<any> {    
        return this.http.get<any>(AppConstants.getbaseUrlPath + 'home/page/' + pagina);
       }

       deletarReserva(id: Number) : Observable<any>{
        return this.http.delete(AppConstants.getbaseUrlPath + 'home/' + id, {responseType : 'text'});
      }
}