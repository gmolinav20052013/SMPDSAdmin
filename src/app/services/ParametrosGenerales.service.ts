import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ParametroGeneral } from '../model/ParametroGeneral';


/**
 * Servicio para el mantenimiento de parámetros del sistema
 *
 * @export
 * @class ParametrosGeneralesService
 */
@Injectable({
  providedIn: 'root'
})
export class ParametrosGeneralesService {

  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }


  public Detalle(id: string): Observable<any>  {

    return this.httpClient.get(`${this.url}parametros/detalle?parametro=${id}`, { responseType: 'json'});

  }

  // public ValorParametro(parametro: string): string {

  //     let resultado = "";

  //     console.log(parametro);

  //   //  const rex =  this.Detalle(parametro).subscribe( resp => { console.log(resp); console.log(resp.parametros.ValorParametro); resultado = resp.parametros.ValorParametro } );

  //      this.httpClient.get(`${this.url}parametros/detalle?parametro=${parametro}`, { responseType: 'json'}).toPromise()
  //         .then( (resp) =>  { resultado = resp.parametros.ValorParametro });

  //     //  let result = this.Detalle(parametro).toPromise();

  //     //  const asignacion = new Promise((resolve, reject) => {
  //     //    result.then((resp) => {

  //     //          console.log(resp);

  //     //          resultado = resp.parametros.ValorParametro;

  //     //            resolve();

  //     //    })
  //     //    .catch((error) => {

  //     //      console.log(error);

  //     //      resultado = "0" ;

  //     //    });
  //     // });


  //      console.log(resultado);

  //     return resultado;

  // }

  public Eliminar(id: string): Observable<any>  {

    return this.httpClient.get(`${this.url}parametros/eliminar?id=${id}`, { responseType: 'json'});

  }

  public Adicionar( parametro: ParametroGeneral): Observable<any> {

    return this.httpClient.post<any>(`${this.url}parametros/crear` , parametro, { responseType: 'json'})
            .pipe( map ( user => {
              if (user) {

              }
              return user;
            }));
  }

  public Actualizar( parametro: ParametroGeneral): Observable<any> {

    return this.httpClient.post<any>(`${this.url}parametros/actualizar` , parametro, { responseType: 'json'})
            .pipe( map ( user => {
              if (user) {

              }
              return user;
            }));
  }


}

