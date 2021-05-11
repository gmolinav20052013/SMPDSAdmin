import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tema } from '../model/Tema';
import { environment } from '../../environments/environment';
import { Departamento } from '../model/Departamento';


@Injectable({
    providedIn: 'root'
  })
  export class DepartamentosService {

  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) {

   }


  public Detalle(): Observable<Departamento[]>  {

    return this.httpClient.get<Departamento[]>(`${this.url}departamentos/detalle`, { responseType: 'json'}) ;

  }

  public Eliminar(id: number): Observable<any>  {

    return this.httpClient.get(`${this.url}departamentos/eliminar?id=${id}`, { responseType: 'json'});

  }

  public Adicionar(departamento: Departamento): Observable<any> {

    return this.httpClient.post<any>(`${this.url}departamentos/crear` , departamento, { responseType: 'json'})
            .pipe( map ( user => {
              if (user) {

              }
              return user;
            }));
  }

  public Actualizar(departamento: Departamento): Observable<any> {

    return this.httpClient.post<any>(`${this.url}departamentos/actualizar` , departamento, { responseType: 'json'})
            .pipe( map ( user => {
              if (user) {

              }
              return user;
            }));
  }


}


