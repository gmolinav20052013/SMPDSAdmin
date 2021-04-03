import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TiposGraficosService } from '../../services/TiposGraficos.service';
import { DatoGenericoCaracter } from '../../model/datoGenerico';
import Swal from 'sweetalert2';
import { TipoGrafico } from '../../model/TipoGrafico';


@Component({
    selector: 'app-TiposGraficos',
    templateUrl: './TiposGraficos.component.html',
    styleUrls: ['./TiposGraficos.component.scss']
  })
  export class TiposGraficosComponent implements OnInit {

  nombreOpcion = 'Tipos de Gráficos';

  constructor(public tiposgraficosservice: TiposGraficosService) { }

  nombreApp = environment.nombreApp;
  public data: TipoGrafico[] = [];
  public generico: DatoGenericoCaracter[] = [{ id:'A', nombre: 'Activo' }, {id:'I', nombre: 'Inactivo'}];
  totalRegistros = 0;

  ngOnInit() {

    this.obtenerTipos();

  }

  ngOnDestroy() {
    this.data = null;
  }


  onInitialized(e) {
    e.component.columnOption("command:edit", "width", 150);
  }

  onRowInserting(e) {

    const dataActu: TipoGrafico = {...e.data};

    let result = this.tiposgraficosservice.Adicionar(dataActu).toPromise();

    e.cancel = new Promise<void>((resolve, reject) => {
      result.then((validationResult) => {
        Swal.fire({
                title: this.nombreApp,
                text: 'Información Actualizada Satisfactoriamente',
                icon: 'info',
                allowOutsideClick: false
              });

              resolve();
              this.obtenerTipos();

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

    const dataActu: TipoGrafico = {...e.oldData, ...e.newData};

    let result = this.tiposgraficosservice.Actualizar(dataActu).toPromise();

    e.cancel = new Promise<void>((resolve, reject) => {
      result.then((validationResult) => {
        Swal.fire({
                title: this.nombreApp,
                text: 'Información Actualizada Satisfactoriamente',
                icon: 'info',
                allowOutsideClick: false
              });

              resolve();

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

    let result = this.tiposgraficosservice.Eliminar(e.data.IdTipoGrafico).toPromise();

    e.cancel = new Promise<void>((resolve, reject) => {
      result.then((validationResult) => {
        Swal.fire({
                title: this.nombreApp,
                text: 'Información Eliminada Satisfactoriamente',
                icon: 'info',
                allowOutsideClick: false
              });

              resolve();
              this.obtenerTipos();

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
    e.data.EstadoRol = 'A';
  }

  obtenerTipos() {

    return this.tiposgraficosservice.Detalle('').subscribe(
      (resp: any) => {
          this.data = resp.tipos;
          this.totalRegistros = resp.totalregistros;
      },
      (err) => {

      }
    );
  }

}


