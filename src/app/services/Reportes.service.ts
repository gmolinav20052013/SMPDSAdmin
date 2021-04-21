import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Reporte } from '../model/Reporte';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) {

   }


  public Detalle(filtro: number): Observable<Reporte[]>  {

    return this.httpClient.get<Reporte[]>(`${this.url}reportes/detalle?filtro=${filtro}`, { responseType: 'json'}) ;

  }

  public Eliminar(id: number): Observable<any>  {

    return this.httpClient.get(`${this.url}reportes/eliminar?id=${id}`, { responseType: 'json'});

  }

  public Adicionar(Reporte: Reporte): Observable<any> {

    return this.httpClient.post<any>(`${this.url}reportes/crear` , Reporte, { responseType: 'json'})
            .pipe( map ( user => {
              if (user) {

              }
              return user;
            }));
  }

  public Actualizar(Reporte: Reporte): Observable<any> {

    return this.httpClient.post<any>(`${this.url}reportes/actualizar` , Reporte, { responseType: 'json'})
            .pipe( map ( user => {
              if (user) {

              }
              return user;
            }));
  }


}

