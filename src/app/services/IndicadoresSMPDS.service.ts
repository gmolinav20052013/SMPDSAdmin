import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { Indicador } from "../model/Indicador";

@Injectable({
    providedIn: "root",
})
export class IndicadoresSMPDSService {
    url = environment.apiUrl;

    constructor(private httpClient: HttpClient) {}

    public Detalle(idtema: number): Observable<Indicador[]> {
        return this.httpClient.get<Indicador[]>(
            `${this.url}indicadores/detalle?idtema=${idtema}`,
            { responseType: "json" }
        );
    }

    public DetalleGraficos(idtema: number): Observable<Indicador[]> {
        return this.httpClient.get<Indicador[]>(
            `${this.url}indicadores/detallegraficos?idtema=${idtema}`,
            { responseType: "json" }
        );
    }

    public DetalleGraficosNacionales(idtema: number): Observable<Indicador[]> {
        return this.httpClient.get<Indicador[]>(
            `${this.url}indicadores/detallegraficosnacionales?idtema=${idtema}`,
            { responseType: "json" }
        );
    }

    public DetalleTacometros(idtema: number): Observable<Indicador[]> {
        return this.httpClient.get<Indicador[]>(
            `${this.url}indicadores/detalletacometros?idtema=${idtema}`,
            { responseType: "json" }
        );
    }

    public Eliminar(id: number): Observable<any> {
        return this.httpClient.get(`${this.url}indicadores/eliminar?id=${id}`, {
            responseType: "json",
        });
    }

    public Adicionar(indicador: Indicador): Observable<any> {
        return this.httpClient
            .post<any>(`${this.url}indicadores/crear`, indicador, {
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

    public Actualizar(indicador: Indicador): Observable<any> {
        return this.httpClient
            .post<any>(`${this.url}indicadores/actualizar`, indicador, {
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

    public DatosGrafico(indicador: number): Observable<any>  {

        return this.httpClient.get<any>(`${this.url}indicadores/datosgrafico?indicador=${indicador}`, { responseType: 'json'}) ;

      }

}
