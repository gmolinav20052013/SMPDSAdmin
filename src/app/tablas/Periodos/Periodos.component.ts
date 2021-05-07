import { Component, OnInit } from '@angular/core';
import { Tema } from 'src/app/model/Tema';
import { environment } from 'src/environments/environment';
import { DatoGenericoCaracter } from '../../model/datoGenerico';
import Swal from 'sweetalert2';
import { ConsultasService } from 'src/app/services/Consultas.service';
import { QBSPERSP } from 'src/app/model/QBSPERSP';
import { PeriodosService } from 'src/app/services/Periodos.service';
import { Periodo } from '../../model/Periodo';



@Component({
    selector: 'app-Periodos',
    templateUrl: './Periodos.component.html',
    styleUrls: ['./Periodos.component.scss']
  })
  export class PeriodosComponent implements OnInit {

  nombreOpcion = 'Períodos';

  constructor(public periodosservice: PeriodosService) {



   }

  nombreApp = environment.nombreApp;
  public data: Periodo[] = [];
  public generico: DatoGenericoCaracter[] = [{ id:'A', nombre: 'Activo' }, {id:'I', nombre: 'Inactivo'}];
  totalRegistros = 0;

  ngOnInit() {

    this.obtenerPeriodos();

  }

  ngOnDestroy() {
    this.data = null;
  }


  onInitialized(e) {
    e.component.columnOption("command:edit", "width", 150);
  }

  onRowInserting(e) {

    const dataActu: Periodo = {...e.data};

    let result = this.periodosservice.Adicionar(dataActu).toPromise();

    e.cancel = new Promise<void>((resolve, reject) => {
      result.then((validationResult) => {
        Swal.fire({
                title: this.nombreApp,
                text: 'Información Actualizada Satisfactoriamente',
                icon: 'info',
                allowOutsideClick: false
              });

              resolve();
              this.obtenerPeriodos();

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

    const dataActu: Periodo = {...e.oldData, ...e.newData};

    let result = this.periodosservice.Actualizar(dataActu).toPromise();

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

    let result = this.periodosservice.Eliminar(e.data.IdPeriodo).toPromise();

    e.cancel = new Promise<void>((resolve, reject) => {
      result.then((validationResult) => {
        Swal.fire({
                title: this.nombreApp,
                text: 'Información Eliminada Satisfactoriamente',
                icon: 'info',
                allowOutsideClick: false
              });

              resolve();
              this.obtenerPeriodos();

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
    e.data.EstadoVisualizacion = 'A';
  }

  obtenerPeriodos() {

    return this.periodosservice.Detalle().subscribe(
      (resp: any) => {
          this.data = resp.periodos;
          this.totalRegistros = resp.totalregistros;
      },
      (err) => {

      }
    );
  }

}


