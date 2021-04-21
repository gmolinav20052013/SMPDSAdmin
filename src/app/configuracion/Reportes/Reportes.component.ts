import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatoGenericoCaracter } from 'src/app/model/datoGenerico';
import { Reporte } from 'src/app/model/Reporte';
import { ReportesService } from 'src/app/services/Reportes.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-Reportes',
    templateUrl: './Reportes.component.html',
    styleUrls: ['./Reportes.component.scss']
  })
  export class ReportesComponent implements OnInit {


    nombreOpcion = '';
    nombreApp = environment.nombreApp;
    public data: Reporte[] = [];
    public generico: DatoGenericoCaracter[] = [{ id:'A', nombre: 'Activo' }, {id:'I', nombre: 'Inactivo'}];
    totalRegistros = 0;


  constructor(public reportesservice: ReportesService,
              private route: ActivatedRoute) {




   }

  ngOnInit() {
    this.nombreOpcion = this.route.snapshot.data['title'];
    this.obtenerParametros();
  }



  onInitialized(e) {
    e.component.columnOption("command:edit", "width", 150);
  }

  onRowInserting(e) {

    const dataActu: Reporte = {...e.data};



    let result = this.reportesservice.Adicionar(dataActu).toPromise();

    e.cancel = new Promise<void>((resolve, reject) => {
      result.then((validationResult) => {
        Swal.fire({
                title: this.nombreApp,
                text: 'Información Actualizada Satisfactoriamente',
                icon: 'info',
                allowOutsideClick: false,
                confirmButtonColor: '#009CD2',
                cancelButtonColor: '#FBBC01',

              });

              resolve();
              this.obtenerParametros();

      })
      .catch((error) => {

        Swal.fire({
        title: this.nombreApp,
        text: !error.message ? error.error.Message : error.message,
        icon: 'error',
        confirmButtonColor: '#009CD2',
        cancelButtonColor: '#FBBC01',

      });


        reject();

      } );
    })
  }
  onRowUpdating(e) {

    const dataActu: Reporte = {...e.oldData, ...e.newData};


    let result = this.reportesservice.Actualizar(dataActu).toPromise();

    e.cancel = new Promise<void>((resolve, reject) => {
      result.then((validationResult) => {
        Swal.fire({
                title: this.nombreApp,
                text: 'Información Actualizada Satisfactoriamente',
                icon: 'info',
                allowOutsideClick: false,
                confirmButtonColor: '#009CD2',
                cancelButtonColor: '#FBBC01',

              });

              resolve();

      })
      .catch((error) => {

        Swal.fire({
        title: this.nombreApp,
        text: error.error.Message ,
        icon: 'error',
        confirmButtonColor: '#009CD2',
        cancelButtonColor: '#FBBC01',

      });


        reject();

      } );
    })



  }
  onRowRemoving(e) {

    let result = this.reportesservice.Eliminar(e.data.IdReporte).toPromise();

    e.cancel = new Promise<void>((resolve, reject) => {
      result.then((validationResult) => {
        Swal.fire({
                title: this.nombreApp,
                text: 'Información Eliminada Satisfactoriamente',
                icon: 'info',
                allowOutsideClick: false,
                confirmButtonColor: '#009CD2',
                cancelButtonColor: '#FBBC01',

              });

              resolve();
              this.obtenerParametros();

      })
      .catch((error) => {

        Swal.fire({
          title: this.nombreApp,
          text: error.error.Message ,
          icon: 'error',
          confirmButtonColor: '#009CD2',
          cancelButtonColor: '#FBBC01',

        });

        reject();

      } );
    })

  }

  onInitNewRow(e) {
    e.data.EstadoActivo  = "A";
    e.data.SecuenciaDespliegue = 1;
  }

  obtenerParametros() {

    return this.reportesservice.Detalle(0).subscribe(
      (resp: any) => {
          this.data = resp.reportes;
          this.totalRegistros = resp.totalregistros;
      },
      (err) => {

      }
    );
  }


}
