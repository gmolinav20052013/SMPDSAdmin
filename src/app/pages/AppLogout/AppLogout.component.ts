import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/LoginService';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-AppLogout',
  templateUrl: './AppLogout.component.html',
  styleUrls: ['./AppLogout.component.scss']
})
export class AppLogoutComponent implements OnInit {

    Usuario = '';

    nombreApp = environment.nombreApp;

  constructor(private loginService: LoginService,
                private router: Router ) { }

  ngOnInit() {

    this.Usuario = localStorage.getItem('currentUser');

  }




  onLogoutClick(event){

  //  const tipoAutenticacion = sessionStorage.getItem('tipoAutenticacion');

  //  if (tipoAutenticacion === 'C') {
        this.loginService.Logout();
        this.router.navigateByUrl('/login');
  //  } else {
  //    this.signOut();
  //  }



  }

}
