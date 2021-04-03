import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RolUsuario } from '../model/RolUsuario';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RolesUsuarioService {

  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) {

   }


  public Detalle(codigoRol: string): Observable<RolUsuario[]>  {

    return this.httpClient.get<RolUsuario[]>(`${this.url}roles/detalle?codigoRol=${codigoRol}`, { responseType: 'json'}) ;

  }

  public Eliminar(id: number): Observable<any>  {

    return this.httpClient.get(`${this.url}roles/eliminar?id=${id}`, { responseType: 'json'});

  }

  public Adicionar( rol: RolUsuario): Observable<any> {

    return this.httpClient.post<any>(`${this.url}roles/crear` , rol, { responseType: 'json'})
            .pipe( map ( user => {
              if (user) {

              }
              return user;
            }));
  }

  public Actualizar( rol: RolUsuario): Observable<any> {

    return this.httpClient.post<any>(`${this.url}roles/actualizar` , rol, { responseType: 'json'})
            .pipe( map ( user => {
              if (user) {

              }
              return user;
            }));
  }


}
