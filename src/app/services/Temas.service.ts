import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tema } from '../model/Tema';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TemasService {

  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) {

   }


  public Detalle(codigotema: string): Observable<Tema[]>  {

    return this.httpClient.get<Tema[]>(`${this.url}temas/detalle?codigotema=${codigotema}`, { responseType: 'json'}) ;

  }

  public Eliminar(id: number): Observable<any>  {

    return this.httpClient.get(`${this.url}temas/eliminar?id=${id}`, { responseType: 'json'});

  }

  public Adicionar(tema: Tema): Observable<any> {

    return this.httpClient.post<any>(`${this.url}temas/crear` , tema, { responseType: 'json'})
            .pipe( map ( user => {
              if (user) {

              }
              return user;
            }));
  }

  public Actualizar(tema: Tema): Observable<any> {

    return this.httpClient.post<any>(`${this.url}temas/actualizar` , tema, { responseType: 'json'})
            .pipe( map ( user => {
              if (user) {

              }
              return user;
            }));
  }


}

