import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tecnicos } from './tecnicos';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TecnicosService {

  private baseUrl = "http://localhost:8080/tecnicos";
  constructor(private http: HttpClient) { }

  getTecnicos(): Observable<Tecnicos[]> {
    return this.http.get<Tecnicos[]>(`${this.baseUrl}`);
  }

  createReporte(tecnico: Tecnicos): Observable<Tecnicos> {
    return this.http.post<Tecnicos>("http://localhost:8080/tecnicos/insertar", tecnico);
  }


}
