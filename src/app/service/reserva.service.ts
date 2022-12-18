import { AppConstants } from '../app-constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Reserva } from '../model/Reserva';

@Injectable({
    providedIn: 'root'
  })
  


export class ReservaService {


    constructor(private http: HttpClient) {}


    salvarReserva(reserva: Reserva) : Observable<any>{

        return this.http.post<any>(AppConstants.baseUrl, reserva);
      
      }

}