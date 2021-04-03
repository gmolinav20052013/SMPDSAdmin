import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RolUsuario } from '../model/RolUsuario';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) {

   }


  public Contadores(): Observable<any>  {

    return this.httpClient.get<any>(`${this.url}dashboard/contadores`, { responseType: 'json'}) ;

  }

}
