import { Component, OnInit } from '@angular/core';
import { DatoGenericoCaracter } from 'src/app/model/datoGenerico';
import { Tema } from 'src/app/model/Tema';
import { TemasService } from 'src/app/services/Temas.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Indicador } from '../../model/Indicador';
import { IndicadoresSMPDSService } from '../../services/IndicadoresSMPDS.service';
import { TipoGrafico } from '../../model/TipoGrafico';
import { TiposGraficosService } from 'src/app/services/TiposGraficos.service';
import { QBSINDIC } from '../../model/QBSINDIC';
import { QBSPERSP } from 'src/app/model/QBSPERSP';
import { ConsultasService } from '../../services/Consultas.service';
import { DatoGenericoBoolean } from '../../model/datoGenerico';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-Indicadores',
  templateUrl: './Indicadores.component.html',
  styleUrls: ['./Indicadores.component.scss']
})
export class IndicadoresComponent implements OnInit {


    idTema = 0;
    public temas: Tema[] = [];
    public tiposgraficos: TipoGrafico[] = [];
    public data: Indicador[] = [];
    public perspectivas: QBSPERSP[] = [];
    public indicadores: QBSINDIC[] = [];
    nombreOpcion = '';

    nombreApp = environment.nombreApp;
    public generico: DatoGenericoCaracter[] = [{ id:'S', nombre: 'Si' }, {id:'N', nombre: 'No'}];
    public generico2: DatoGenericoBoolean[] = [{ id: true, nombre: 'Si' }, {id: false, nombre: 'No'}];

  constructor(public temasservice: TemasService, public indicadoresservice: IndicadoresSMPDSService,
              public tiposgraficosservice: TiposGraficosService,
              public consultasservice: ConsultasService,
              private route: ActivatedRoute) {

                this.obtenerTemas();
                this.obtenerTiposGraficos();
                this.obtenerPerspectivasBSC();
                this.obtenerIndicadoresBSC();

                this.getIndicadoresBSC = this.getIndicadoresBSC.bind(this);

              }

  ngOnInit() {
    this.nombreOpcion = this.route.snapshot.data['title'];
  }

  TemaValueChange(e) {
    this.idTema = e.value;
    this.obtenerIndicadores(this.idTema);
  }


  onInitialized(e) {
    e.component.columnOption("command:edit", "width", 150);
  }

  onRowInserting(e) {

    const dataActu: Indicador = {...e.data};

    dataActu.IdTema = this.idTema;

    let result = this.indicadoresservice.Adicionar(dataActu).toPromise();

    e.cancel = new Promise<void>((resolve, reject) => {
      result.then((validationResult) => {
        Swal.fire({
                title: this.nombreApp,
                text: 'Información Actualizada Satisfactoriamente',
                icon: 'info',
                allowOutsideClick: false
              });

              resolve();
              this.obtenerIndicadores(this.idTema);

      })
      .catch((error) => {

        Swal.fire({
        title: this.nombreApp,
        text: !error.message ? error.error.Message : error.message,
        icon: 'error'
      });

        reject();

      } );
    })
  }
  onRowUpdating(e) {

    const dataActu: Indicador = {...e.oldData, ...e.newData};

    let result = this.indicadoresservice.Actualizar(dataActu).toPromise();

    e.cancel = new Promise<void>((resolve, reject) => {
      result.then((validationResult) => {
        Swal.fire({
                title: this.nombreApp,
                text: 'Información Actualizada Satisfactoriamente',
                icon: 'info',
                allowOutsideClick: false
              });

              resolve();
              this.obtenerIndicadores(this.idTema);

      })
      .catch((error) => {

        Swal.fire({
        title: this.nombreApp,
        text: error.error.Message ,
        icon: 'error'
      });

        reject();

      } );
    })



  }
  onRowRemoving(e) {

    let result = this.indicadoresservice.Eliminar(e.data.IdIndicador).toPromise();

    e.cancel = new Promise<void>((resolve, reject) => {
      result.then((validationResult) => {
        Swal.fire({
                title: this.nombreApp,
                text: 'Información Eliminada Satisfactoriamente',
                icon: 'info',
                allowOutsideClick: false
              });

              resolve();
              this.obtenerIndicadores(this.idTema);

      })
      .catch((error) => {

        Swal.fire({
        title: this.nombreApp,
        text: error.error.Message ,
        icon: 'error'
      });

        reject();

      } );
    })

  }

  onInitNewRow(e) {
    e.data.SecuenciaVisualizacion = 0;
    e.data.EstadoVisualizacion='S';
    e.data.Drilldown = true;
    e.data.AgrupacionSerie = false;
    e.data.TituloEjeY = 'Valores';
    // e.data.FormatoVisualizacionDato = "<span style='color:{point.color}'>{point.name}</span>: <b>{point.y:.1f}</b><br/>";
    // e.data.FormatoTooltipEncabezado = "<span style='font-size:11px'>{series.name}</span><br>";
    // e.data.FormatoTooltipDato = "{point.y:.1f}";
    e.data.TituloEjeX = 'Valor';
    e.data.TituloEjeXDrilldown = '%';
    e.data.NumeroDecimalesFormato = 1;

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

  obtenerPerspectivasBSC() {

    return this.consultasservice.Perspectivas().subscribe(
      (resp: any) => {
          this.perspectivas = resp.perspectivas;
      },
      (err) => {

      }
    );
  }

  obtenerIndicadoresBSC() {

    return this.consultasservice.Indicadores().subscribe(
      (resp: any) => {
          this.indicadores = resp.indicadores;
      },
      (err) => {

      }
    );
  }

  obtenerTiposGraficos() {

    return this.tiposgraficosservice.Detalle('').subscribe(
      (resp: any) => {
          this.tiposgraficos = resp.tipos;
      },
      (err) => {

      }
    );
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

  setIndicadorBSCValue(rowData: any, value: any): void {
    rowData.CODINDIC = null;
    (this as any).defaultSetCellValue(rowData, value);
  }

  getIndicadoresBSC(options) {
    return {
        store: this.indicadores,
        filter: options.data ? ['CODPERSP', '=', options.data.CODPERSP] : null
    };
  }



}
