import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';
import { LoginViewModel } from '../model/LoginViewModel';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUSerName: string = null;

  url = environment.apiUrl ;

  private httpClient: HttpClient;

  constructor(private httpBackend: HttpBackend,
              private jwtHelperService: JwtHelperService) { }


    public Login( loginViewModel: LoginViewModel): Observable<any> {

     // console.log(loginViewModel);

      this.httpClient = new HttpClient(this.httpBackend);

      return this.httpClient.post<any>(`${this.url}login/autenticacion` , loginViewModel, { responseType: 'json'})
              .pipe( map ( user => {
                if (user) {
                 // this.currentUSerName = user.userName;
                 //sessionStorage.currentUser = loginViewModel.Usuario;
                 localStorage.setItem('currentUser', loginViewModel.Usuario);
                 sessionStorage.setItem('currentToken', JSON.stringify(user));
                 this.currentUSerName = loginViewModel.Usuario;
                 sessionStorage.setItem('tipoAutenticacion', 'C');

                }
                return user;
              }));
    }

    // public LoginGoogle( loginViewModel: LoginGoogleViewModel): Observable<any> {

    //   this.httpClient = new HttpClient(this.httpBackend);

    //   return this.httpClient.post<any>(`${this.url}login/autenticaciongoogle` , loginViewModel, { responseType: 'json'})
    //           .pipe( map ( user => {
    //             if (user) {
    //              // this.currentUSerName = user.userName;
    //              //sessionStorage.currentUser = loginViewModel.Usuario;
    //              localStorage.setItem('currentUser', loginViewModel.email);
    //              sessionStorage.setItem('currentToken', JSON.stringify(user));
    //              this.currentUSerName = loginViewModel.email;
    //              sessionStorage.setItem('tipoAutenticacion', 'G');

    //             }
    //             return user;
    //           }));
    // }

    // public LoginFacebook( loginViewModel: LoginGoogleViewModel): Observable<any> {

    // //  console.log(loginViewModel);

    //   this.httpClient = new HttpClient(this.httpBackend);

    //   return this.httpClient.post<any>(`${this.url}login/autenticacionfacebook` , loginViewModel, { responseType: 'json'})
    //           .pipe( map ( user => {
    //             if (user) {
    //              // this.currentUSerName = user.userName;
    //              //sessionStorage.currentUser = loginViewModel.Usuario;
    //              localStorage.setItem('currentUser', loginViewModel.email);
    //              sessionStorage.setItem('currentToken', JSON.stringify(user));
    //              this.currentUSerName = loginViewModel.email;
    //              sessionStorage.setItem('tipoAutenticacion', 'G');

    //             }
    //             return user;
    //           }));
    // }

    VerificaEmailExistente(Email: string): Observable<any> {

      // let loginViewModel: LoginViewModel = new LoginViewModel();

      // loginViewModel.Usuario = Email;

      this.httpClient = new HttpClient(this.httpBackend);
      return this.httpClient.get<any>(`${this.url}registro/verificacorreo?email=${Email}`, { responseType: 'json'});

      // tslint:disable-next-line: max-line-length
      // return this.httpClient.get<any>(`${this.url}api/verificacorreo?email=${Email}`).pipe(map( (result: boolean) => result ? null : true ));

      // .pipe(map((result: boolean) => result ? null : {invalidAsync: true})

    }

    ReiniciaEmail(Email: string): Observable<any> {

      this.httpClient = new HttpClient(this.httpBackend);
      return this.httpClient.get<any>(`${this.url}registro/reiniciopassword?email=${Email}`, { responseType: 'json'});

    }


    public Logout()  {
      if (localStorage.getItem('recuerdaUsuario') === 'false') {
          localStorage.removeItem('currentUser');
      }
      this.currentUSerName = null;
      sessionStorage.removeItem('currentToken');
      sessionStorage.removeItem('tipoAutenticacion');
    }

    public isAuthenticated(): boolean {

      var token = sessionStorage.getItem('currentToken') ?
      JSON.parse(sessionStorage.getItem('currentToken')).token :
       null;

      if (this.jwtHelperService.isTokenExpired(token)) {
         return false;
       } else { return true;
      }

    }

    public isADMIN(): boolean {

      var token = sessionStorage.getItem('currentToken') ?
      JSON.parse(sessionStorage.getItem('currentToken')).token :
       null;

       const datatoken = this.jwtHelperService.decodeToken(token);

       if (datatoken.rolusuario === 'ADMIN') {
         return true;
       } else {
         return false;
       }

    }

    public ObtieneROLUsuario(): string {

      var token = sessionStorage.getItem('currentToken') ?
      JSON.parse(sessionStorage.getItem('currentToken')).token :
       null;

      const datatoken = this.jwtHelperService.decodeToken(token);

      return datatoken.rolusuario;

    }


    public ObtieneEmailUsuario(): string {

      const token = sessionStorage.getItem('currentToken') ?
      JSON.parse(sessionStorage.getItem('currentToken')).token :
       null;

       let emailusuario = '';

      if (token != null) {
          const datatoken = this.jwtHelperService.decodeToken(token);
         // rolusuario = datatoken.email.concat('-', datatoken.rolusuario);
          emailusuario = datatoken.email;
      }

      return emailusuario;

    }




}

