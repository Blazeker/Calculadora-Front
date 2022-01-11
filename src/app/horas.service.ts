import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Calculo } from './calculo';

@Injectable({
  providedIn: 'root'
})
export class HorasService {

  constructor(private http: HttpClient) { }


  mostrarResumen(idTecnico: String, semana: number)
  {
    return this.http.get(`http://localhost:8080/horas/${idTecnico}/${semana}`);
  }
}
