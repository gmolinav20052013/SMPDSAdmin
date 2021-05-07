import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { Indicador } from "../model/Indicador";
import { DetalleIndicador } from "../model/DetalleIndicador";

@Injectable({
    providedIn: 'root'
  })
  export class DetalleIndicadoresService {
    url = environment.apiUrl;

    constructor(private httpClient: HttpClient) {}

    public Detalle(idindicador: number): Observable<Indicador[]> {
        return this.httpClient.get<Indicador[]>(
            `${this.url}detalleindicadores/detalle?idindicador=${idindicador}`,
            { responseType: "json" }
        );
    }

    public Eliminar(id: number): Observable<any> {
        return this.httpClient.get(`${this.url}detalleindicadores/eliminar?id=${id}`, {
            responseType: "json",
        });
    }

    public Adicionar(detalleindicador: DetalleIndicador): Observable<any> {
        return this.httpClient
            .post<any>(`${this.url}detalleindicadores/crear`, detalleindicador, {
                responseType: "json",
            })
            .pipe(
                map((user) => {
                    if (user) {
                    }
                    return user;
                })
            );
    }

    public Actualizar(detalleindicador: DetalleIndicador): Observable<any> {
        return this.httpClient
            .post<any>(`${this.url}detalleindicadores/actualizar`, detalleindicador, {
                responseType: "json",
            })
            .pipe(
                map((user) => {
                    if (user) {
                    }
                    return user;
                })
            );
    }

}

