import { Component, OnInit } from '@angular/core';
import { Tema } from 'src/app/model/Tema';
import { environment } from 'src/environments/environment';
import { TemasService } from '../../services/Temas.service';
import { DatoGenericoCaracter } from '../../model/datoGenerico';
import Swal from 'sweetalert2';



@Component({
    selector: 'app-Temas',
    templateUrl: './Temas.component.html',
    styleUrls: ['./Temas.component.scss']
  })
  export class TemasComponent implements OnInit {

  nombreOpcion = 'Temas';

  constructor(public temasservice: TemasService) { }

  nombreApp = environment.nombreApp;
  public data: Tema[] = [];
  public generico: DatoGenericoCaracter[] = [{ id:'A', nombre: 'Activo' }, { id:'B', nombre: 'Baja' }, {id:'I', nombre: 'Inactivo'}];
  totalRegistros = 0;

  ngOnInit() {

    this.obtenerTemas();

  }

  ngOnDestroy() {
    this.data = null;
  }


  onInitialized(e) {
    e.component.columnOption("command:edit", "width", 150);
  }

  onRowInserting(e) {

    const dataActu: Tema = {...e.data};

    let result = this.temasservice.Adicionar(dataActu).toPromise();

    e.cancel = new Promise<void>((resolve, reject) => {
      result.then((validationResult) => {
        Swal.fire({
                title: this.nombreApp,
                text: 'Información Actualizada Satisfactoriamente',
                icon: 'info',
                allowOutsideClick: false
              });

              resolve();
              this.obtenerTemas();

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

    const dataActu: Tema = {...e.oldData, ...e.newData};

    let result = this.temasservice.Actualizar(dataActu).toPromise();

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

    let result = this.temasservice.Eliminar(e.data.IdTema).toPromise();

    e.cancel = new Promise<void>((resolve, reject) => {
      result.then((validationResult) => {
        Swal.fire({
                title: this.nombreApp,
                text: 'Información Eliminada Satisfactoriamente',
                icon: 'info',
                allowOutsideClick: false
              });

              resolve();
              this.obtenerTemas();

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

  obtenerTemas() {

    return this.temasservice.Detalle('').subscribe(
      (resp: any) => {
          this.data = resp.temas;
          this.totalRegistros = resp.totalregistros;
      },
      (err) => {

      }
    );
  }

}

