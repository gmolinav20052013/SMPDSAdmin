import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatoGenericoCaracter } from 'src/app/model/datoGenerico';
import { ParametroGeneral } from 'src/app/model/ParametroGeneral';
import { ParametrosGeneralesService } from 'src/app/services/ParametrosGenerales.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ParametrosSistema',
  templateUrl: './ParametrosSistema.component.html',
  styleUrls: ['./ParametrosSistema.component.scss']
})
export class ParametrosSistemaComponent implements OnInit {


    nombreOpcion = '';
    nombreApp = environment.nombreApp;
    public data: ParametroGeneral[] = [];
    public generico: DatoGenericoCaracter[] = [{ id:'C', nombre: 'Caracter' }, {id:'F', nombre: 'Fecha'},
                                               { id:'B', nombre: 'Booleano'}, {id: 'N', nombre: 'Númerico'}];
    totalRegistros = 0;


  constructor(public parametrosservice: ParametrosGeneralesService,
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

    const dataActu: ParametroGeneral = {...e.data};



    let result = this.parametrosservice.Adicionar(dataActu).toPromise();

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

    const dataActu: ParametroGeneral = {...e.oldData, ...e.newData};


    let result = this.parametrosservice.Actualizar(dataActu).toPromise();

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

    let result = this.parametrosservice.Eliminar(e.data.IdParametroGeneral).toPromise();

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
    e.data.TipoDatoParametro = false;
  }

  obtenerParametros() {

    return this.parametrosservice.Detalle('').subscribe(
      (resp: any) => {
          this.data = resp.parametros;
          this.totalRegistros = resp.totalregistros;
      },
      (err) => {

      }
    );
  }


}
