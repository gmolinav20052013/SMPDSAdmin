import { Component, OnInit } from '@angular/core';
import { RolUsuario } from 'src/app/model/RolUsuario';
import { environment } from 'src/environments/environment';
import { RolesUsuarioService } from '../../services/RolesUsuario.service';
import { DatoGenericoCaracter } from '../../model/datoGenerico';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-RolesUsuarios',
  templateUrl: './RolesUsuarios.component.html',
  styleUrls: ['./RolesUsuarios.component.scss']
})
export class RolesUsuariosComponent implements OnInit {

  nombreOpcion = 'Roles de usuarios';

  constructor(public rolservice: RolesUsuarioService) { }

  nombreApp = environment.nombreApp;
  public data: RolUsuario[] = [];
  public generico: DatoGenericoCaracter[] = [{ id:'A', nombre: 'Activo' }, { id:'B', nombre: 'Baja' }, {id:'I', nombre: 'Inactivo'}];
  totalRegistros = 0;

  ngOnInit() {

    this.obtenerRoles();

  }

  ngOnDestroy() {
    this.data = null;
  }


  onInitialized(e) {
    e.component.columnOption("command:edit", "width", 150);
  }

  onRowInserting(e) {

    const dataActu: RolUsuario = {...e.data};

    let result = this.rolservice.Adicionar(dataActu).toPromise();

    e.cancel = new Promise<void>((resolve, reject) => {
      result.then((validationResult) => {
        Swal.fire({
                title: this.nombreApp,
                text: 'Información Actualizada Satisfactoriamente',
                icon: 'info',
                allowOutsideClick: false
              });

              resolve();
              this.obtenerRoles();

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

    const dataActu: RolUsuario = {...e.oldData, ...e.newData};

    let result = this.rolservice.Actualizar(dataActu).toPromise();

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

    let result = this.rolservice.Eliminar(e.data.IdRolUsuario).toPromise();

    e.cancel = new Promise<void>((resolve, reject) => {
      result.then((validationResult) => {
        Swal.fire({
                title: this.nombreApp,
                text: 'Información Eliminada Satisfactoriamente',
                icon: 'info',
                allowOutsideClick: false
              });

              resolve();
              this.obtenerRoles();

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

  obtenerRoles() {

    return this.rolservice.Detalle('').subscribe(
      (resp: any) => {
          this.data = resp.roles;
          this.totalRegistros = resp.totalregistros;
      },
      (err) => {

      }
    );
  }

}
