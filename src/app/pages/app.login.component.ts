import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    loginFormGroup: FormGroup;


    constructor(public loginService: LoginService,
        private fbuilder: FormBuilder,
        private router: Router ) {

            this.loginFormGroup = this.fbuilder.group({
                Usuario: [null, [Validators.required]] ,
                Password: [null, [Validators.required]]
            });

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

    this.loginViewModel = {...this.loginFormGroup.value};

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
