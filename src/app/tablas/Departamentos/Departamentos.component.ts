import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { DepartamentosService } from 'src/app/services/Departamentos.service';
import { Departamento } from 'src/app/model/Departamento';



@Component({
    selector: 'app-Departamentos',
    templateUrl: './Departamentos.component.html',
    styleUrls: ['./Departamentos.component.scss']
  })
  export class DepartamentosComponent implements OnInit {
  nombreOpcion = 'Departamentos';

  constructor(public departamentosservice: DepartamentosService) {



   }

  nombreApp = environment.nombreApp;
  public data: Departamento[] = [];
  totalRegistros = 0;

  ngOnInit() {

    this.obtenerDepartamentos();

  }

  ngOnDestroy() {
    this.data = null;
  }


  onInitialized(e) {
    e.component.columnOption("command:edit", "width", 150);
  }

  onRowInserting(e) {

    const dataActu: Departamento = {...e.data};

    let result = this.departamentosservice.Adicionar(dataActu).toPromise();

    e.cancel = new Promise<void>((resolve, reject) => {
      result.then((validationResult) => {
        Swal.fire({
                title: this.nombreApp,
                text: 'Información Actualizada Satisfactoriamente',
                icon: 'info',
                allowOutsideClick: false
              });

              resolve();
              this.obtenerDepartamentos();

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

    const dataActu: Departamento = {...e.oldData, ...e.newData};

    let result = this.departamentosservice.Actualizar(dataActu).toPromise();

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

    let result = this.departamentosservice.Eliminar(e.data.IdDepartamento).toPromise();

    e.cancel = new Promise<void>((resolve, reject) => {
      result.then((validationResult) => {
        Swal.fire({
                title: this.nombreApp,
                text: 'Información Eliminada Satisfactoriamente',
                icon: 'info',
                allowOutsideClick: false
              });

              resolve();
              this.obtenerDepartamentos();

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
    e.data.SecuenciaVisualizacion = 1;
  }

  obtenerDepartamentos() {

    return this.departamentosservice.Detalle().subscribe(
      (resp: any) => {
          this.data = resp.departamentos;
          this.totalRegistros = resp.totalregistros;
      },
      (err) => {

      }
    );
  }



}


