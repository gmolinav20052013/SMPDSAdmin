import { Component, OnInit } from '@angular/core';
import { Indicador } from 'src/app/model/Indicador';
import { Tema } from 'src/app/model/Tema';
import { IndicadoresSMPDSService } from 'src/app/services/IndicadoresSMPDS.service';
import { TemasService } from 'src/app/services/Temas.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-VisualizacionIndicadores',
  templateUrl: './VisualizacionIndicadores.component.html',
  styleUrls: ['./VisualizacionIndicadores.component.scss']
})
export class VisualizacionIndicadoresComponent implements OnInit {

    idTema = 0;
    public temas: Tema[] = [];
    public data: Indicador[] = [];
    nombreOpcion = 'Visualización Indicadores';
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

    return this.indicadoresservice.Detalle(idtema).subscribe(
      (resp: any) => {
          this.data = resp.indicadores;
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
