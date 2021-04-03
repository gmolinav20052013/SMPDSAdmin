import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { LoginViewModel } from '../model/LoginViewModel';
import { LoginService } from '../services/LoginService';

@Component({
  selector: 'app-login',
  templateUrl: './app.login.component.html',
})
export class AppLoginComponent implements OnInit {


    loginViewModel: LoginViewModel = new LoginViewModel();
    userlogged: string = '';
    nombreApp = environment.nombreApp;


    constructor(public loginService: LoginService,
        private router: Router ) {

        }

    ngOnInit(): void {
    }


  onLoginClick(event){

    Swal.fire({

      title: this.nombreApp,
      text: 'Verificando credenciales',
      icon: 'info',
      allowOutsideClick: false

    });

    Swal.showLoading();

    this.loginService.Login(this.loginViewModel)
      .subscribe( (response) => {
        Swal.close();

        this.userlogged = this.loginViewModel.Usuario;

        this.router.navigateByUrl('/');

      },
      (error) => {
      //  console.log('*** cache el error ****');
     //   console.log(error);
     //   console.log(error.error.Message);
      //  this.loginError = error.error.Message;

        Swal.fire({
          title: this.nombreApp,
          text: error.error.Message,
          icon: 'error',
          confirmButtonColor: '#313945',
        });


      },
    );
  }



}
