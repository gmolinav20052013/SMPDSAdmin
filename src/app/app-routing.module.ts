import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppMainComponent} from './app.main.component';

import {AppNotfoundComponent} from './pages/app.notfound.component';
import {AppErrorComponent} from './pages/app.error.component';
import {AppAccessdeniedComponent} from './pages/app.accessdenied.component';
import {AppLoginComponent} from './pages/app.login.component';
import {AppHelpComponent} from './pages/app.help.component';
import { DashComponent } from './views/Dash/Dash.component';
import { CanActivateGuardService } from './services/CanActivateGuard.service';
import { AppLogoutComponent } from './pages/AppLogout/AppLogout.component';
import { RolesUsuariosComponent } from './seguridad/RolesUsuarios/RolesUsuarios.component';
import { UsuariosComponent } from './seguridad/Usuarios/Usuarios.component';
import { OpcionesSistemaComponent } from './seguridad/OpcionesSistema/OpcionesSistema.component';
import { OpcionesRolComponent } from './seguridad/OpcionesRol/OpcionesRol.component';
import { TiposGraficosComponent } from './tablas/TiposGraficos/TiposGraficos.component';
import { TemasComponent } from './tablas/Temas/Temas.component';
import { ParametrosSistemaComponent } from './configuracion/ParametrosSistema/ParametrosSistema.component';
import { IndicadoresComponent } from './configuracion/Indicadores/Indicadores.component';
import { VisualizacionIndicadoresComponent } from './configuracion/VisualizacionIndicadores/VisualizacionIndicadores.component';




@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent, canActivate: [CanActivateGuardService] ,
                children: [
                    {path: '', component: DashComponent , canActivate: [CanActivateGuardService] },
                    {path: 'rolesusuario', component: RolesUsuariosComponent , canActivate: [CanActivateGuardService]},
                    {path: 'usuarios', component: UsuariosComponent , canActivate: [CanActivateGuardService]},
                    {path: 'opcionessistema', component: OpcionesSistemaComponent , canActivate: [CanActivateGuardService]},
                    {path: 'opcionesrol', component: OpcionesRolComponent , canActivate: [CanActivateGuardService]},
                    {path: 'tiposgraficos', component: TiposGraficosComponent , canActivate: [CanActivateGuardService]},
                    {path: 'temas', component: TemasComponent , canActivate: [CanActivateGuardService]},
                    {path: 'parametrossistema', component: ParametrosSistemaComponent , canActivate: [CanActivateGuardService]},
                    {path: 'indicadores', component: IndicadoresComponent , canActivate: [CanActivateGuardService]},
                    {path: 'visualizacion', component: VisualizacionIndicadoresComponent , canActivate: [CanActivateGuardService]},
                ]
            },
            {path: 'error', component: AppErrorComponent},
            {path: 'access', component: AppAccessdeniedComponent},
            {path: 'notfound', component: AppNotfoundComponent},
            {path: 'login', component: AppLoginComponent},
            {path: 'logout', component: AppLogoutComponent , canActivate: [CanActivateGuardService]},
            {path: '**', redirectTo: '/notfound'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
