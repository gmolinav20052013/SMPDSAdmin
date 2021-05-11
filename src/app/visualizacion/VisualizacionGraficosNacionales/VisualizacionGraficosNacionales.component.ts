import { Component, OnInit } from '@angular/core';
import { Indicador } from 'src/app/model/Indicador';
import { Tema } from 'src/app/model/Tema';
import { IndicadoresSMPDSService } from 'src/app/services/IndicadoresSMPDS.service';
import { TemasService } from 'src/app/services/Temas.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-VisualizacionGraficosNacionales',
    templateUrl: './VisualizacionGraficosNacionales.component.html',
    styleUrls: ['./VisualizacionGraficosNacionales.component.scss']
  })
  export class VisualizacionGraficosNacionalesComponent implements OnInit {

    idTema = 0;
    public temas: Tema[] = [];
    public data: Indicador[] = [];
    nombreOpcion = 'Visualización Gráficos y tablas nacionales';
    nombreApp = environment.nombreApp;

  constructor(public temasservice: TemasService, public indicadoresservice: IndicadoresSMPDSService) {
    this.obtenerTemas();
  }

  ngOnInit() {
  }

  TemaValueChange(e) {
    this.idTema = e.value;
    this.obtenerIndicadores(this.idTema);
  }

  obtenerIndicadores(idtema: number) {

    return this.indicadoresservice.DetalleGraficosNacionales(idtema).subscribe(
      (resp: any) => {
          this.data = resp.indicadores;

        //  console.log(this.data);
      },
      (err) => {

      }
    );
  }


  obtenerTemas() {

    return this.temasservice.Detalle('').subscribe(
      (resp: any) => {
          this.temas = resp.temas;
      },
      (err) => {

      }
    );
  }

}

