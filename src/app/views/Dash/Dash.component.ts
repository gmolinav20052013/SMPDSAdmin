import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/Dashboard.service';

@Component({
  selector: 'app-Dash',
  templateUrl: './Dash.component.html',
  styleUrls: ['./Dash.component.scss']
})
export class DashComponent implements OnInit {

    RolesUsuarios = 0;
    Usuarios = 0;
    OpcionesSistemas = 0;
    OpcionesRol = 0;
    Temas = 0;
    TiposGraficos = 0;
    ParametrosSistema = 0;
    Indicadores = 0;
    Tacometros = 0;
    Reportes = 0;

  constructor(private dashboardservice: DashboardService) { }

  ngOnInit() {

    this.obtenerContadores();

  }

  obtenerContadores() {

    return this.dashboardservice.Contadores().subscribe(
      (resp: any) => {

        this.RolesUsuarios = resp.rolesusuarios;
        this.Usuarios = resp.usuarios;
        this.OpcionesSistemas = resp.opcionessistemas;
        this.OpcionesRol = resp.opcionesrol;
        this.Temas = resp.temas;
        this.TiposGraficos = resp.tiposgraficos;
        this.ParametrosSistema = resp.parametrossistema;
        this.Indicadores = resp.indicadores;
        this.Tacometros = resp.tacometros;
        this.Reportes = resp.reportes;

      },
      (err) => {

      }
    );
  }

}
