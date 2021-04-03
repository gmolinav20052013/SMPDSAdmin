import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { QBSPERSP } from '../model/QBSPERSP';
import { QBSINDIC } from '../model/QBSINDIC';


@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) {

   }


  public Perspectivas(): Observable<QBSPERSP[]>  {

    return this.httpClient.get<QBSPERSP[]>(`${this.url}consultas/perspectivas`, { responseType: 'json'}) ;

  }

  public Indicadores(): Observable<QBSINDIC[]>  {

    return this.httpClient.get<QBSINDIC[]>(`${this.url}consultas/indicadores`, { responseType: 'json'}) ;

  }



}


