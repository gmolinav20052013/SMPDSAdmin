import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tema } from '../model/Tema';
import { environment } from '../../environments/environment';
import { Periodo } from '../model/Periodo';


@Injectable({
    providedIn: 'root'
  })
  export class PeriodosService {


  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) {

   }


  public Detalle(): Observable<Periodo[]>  {

    return this.httpClient.get<Periodo[]>(`${this.url}periodos/detalle`, { responseType: 'json'}) ;

  }

  public Eliminar(id: number): Observable<any>  {

    return this.httpClient.get(`${this.url}periodos/eliminar?id=${id}`, { responseType: 'json'});

  }

  public Adicionar(periodo: Periodo): Observable<any> {

    return this.httpClient.post<any>(`${this.url}periodos/crear` , periodo, { responseType: 'json'})
            .pipe( map ( user => {
              if (user) {

              }
              return user;
            }));
  }

  public Actualizar(periodo: Periodo): Observable<any> {

    return this.httpClient.post<any>(`${this.url}periodos/actualizar` , periodo, { responseType: 'json'})
            .pipe( map ( user => {
              if (user) {

              }
              return user;
            }));
  }


}


