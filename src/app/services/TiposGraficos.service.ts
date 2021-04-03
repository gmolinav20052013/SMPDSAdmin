import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { TipoGrafico } from '../model/TipoGrafico';


@Injectable({
  providedIn: 'root'
})
export class TiposGraficosService {

  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) {

   }


  public Detalle(tipografico: string): Observable<TipoGrafico[]>  {

    return this.httpClient.get<TipoGrafico[]>(`${this.url}tiposgraficos/detalle?tipografico=${tipografico}`, { responseType: 'json'}) ;

  }

  public Eliminar(id: number): Observable<any>  {

    return this.httpClient.get(`${this.url}tiposgraficos/eliminar?id=${id}`, { responseType: 'json'});

  }

  public Adicionar(tipografico: TipoGrafico): Observable<any> {

    return this.httpClient.post<any>(`${this.url}tiposgraficos/crear` , tipografico, { responseType: 'json'})
            .pipe( map ( user => {
              if (user) {

              }
              return user;
            }));
  }

  public Actualizar(tipografico: TipoGrafico): Observable<any> {

    return this.httpClient.post<any>(`${this.url}tiposgraficos/actualizar` , tipografico, { responseType: 'json'})
            .pipe( map ( user => {
              if (user) {

              }
              return user;
            }));
  }


}


