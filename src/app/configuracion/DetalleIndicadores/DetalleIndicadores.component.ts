import { Component, Input, OnInit } from '@angular/core';
import { DatoGenericoCaracter } from 'src/app/model/datoGenerico';
import { TemasService } from 'src/app/services/Temas.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { TipoGrafico } from '../../model/TipoGrafico';
import { TiposGraficosService } from 'src/app/services/TiposGraficos.service';
import { QBSINDIC } from '../../model/QBSINDIC';
import { QBSPERSP } from 'src/app/model/QBSPERSP';
import { ConsultasService } from '../../services/Consultas.service';
import { DatoGenericoBoolean } from '../../model/datoGenerico';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { DetalleIndicador } from 'src/app/model/DetalleIndicador';
import { DetalleIndicadoresService } from 'src/app/services/DetalleIndicadores.service';

@Component({
    selector: 'app-DetalleIndicadores',
    templateUrl: './DetalleIndicadores.component.html',
    styleUrls: ['./DetalleIndicadores.component.scss']
  })
  export class DetalleIndicadoresComponent implements OnInit {


    @Input() IdIndicador: number;

    public tiposgraficos: TipoGrafico[] = [];
    public data: DetalleIndicador[] = [];
    public perspectivas: QBSPERSP[] = [];
    public indicadores: QBSINDIC[] = [];
    nombreOpcion = '';

    nombreApp = environment.nombreApp;
    public generico: DatoGenericoCaracter[] = [{ id:'S', nombre: 'Si' }, {id:'N', nombre: 'No'}];
    public generico2: DatoGenericoBoolean[] = [{ id: true, nombre: 'Si' }, {id: false, nombre: 'No'}];

  constructor(public temasservice: TemasService, public detalleindicadoresservice: DetalleIndicadoresService,
              public consultasservice: ConsultasService,
              public tiposgraficosservice: TiposGraficosService,
              private route: ActivatedRoute) {

                this.obtenerPerspectivasBSC();
                this.obtenerIndicadoresBSC();
                this.obtenerTiposGraficos();

                this.getIndicadoresBSC = this.getIndicadoresBSC.bind(this);

              }

  ngOnInit() {
    this.obtenerIndicadores(this.IdIndicador);
  }


  onInitialized(e) {
    e.component.columnOption("command:edit", "width", 150);
  }

  onRowInserting(e) {

    const dataActu: DetalleIndicador = {...e.data};

    dataActu.IdIndicador = this.IdIndicador;

    let result = this.detalleindicadoresservice.Adicionar(dataActu).toPromise();

    e.cancel = new Promise<void>((resolve, reject) => {
      result.then((validationResult) => {
        Swal.fire({
                title: this.nombreApp,
                text: 'Información Actualizada Satisfactoriamente',
                icon: 'info',
                allowOutsideClick: false
              });

              resolve();
              this.obtenerIndicadores(this.IdIndicador);

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

    const dataActu: DetalleIndicador = {...e.oldData, ...e.newData};

    let result = this.detalleindicadoresservice.Actualizar(dataActu).toPromise();

    e.cancel = new Promise<void>((resolve, reject) => {
      result.then((validationResult) => {
        Swal.fire({
                title: this.nombreApp,
                text: 'Información Actualizada Satisfactoriamente',
                icon: 'info',
                allowOutsideClick: false
              });

              resolve();
              this.obtenerIndicadores(this.IdIndicador);

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

    let result = this.detalleindicadoresservice.Eliminar(e.data.IdDetalleIndicador).toPromise();

    e.cancel = new Promise<void>((resolve, reject) => {
      result.then((validationResult) => {
        Swal.fire({
                title: this.nombreApp,
                text: 'Información Eliminada Satisfactoriamente',
                icon: 'info',
                allowOutsideClick: false
              });

              resolve();
              this.obtenerIndicadores(this.IdIndicador);

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
  }

  optionChangedHandler(args) {
    if (args.name === 'width' && args.value < 400) {
        args.component.option('width', 400);
    }
}

onEditorPreparing(e) {
    if (e.parentType === 'dataRow' && e.dataField === 'CODINDIC') {
      e.editorOptions.onOpened = function(arg) {
          const popupInstance = arg.component._popup;
          popupInstance.option('width', 700);
          // popupInstance.off('optionChanged', this.optionChangedHandler);
          // popupInstance.on('optionChanged', this.optionChangedHandler);
      };
    }
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

  obtenerIndicadores(idindicador: number) {

    return this.detalleindicadoresservice.Detalle(idindicador).subscribe(
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

