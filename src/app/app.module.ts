import {NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DevExtremeModule  } from './devextreme.module';
import { HighchartsChartModule } from 'highcharts-angular';


// PrimeNG Components for demos
import {AccordionModule} from 'primeng/accordion';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {ChartModule} from 'primeng/chart';
import {CheckboxModule} from 'primeng/checkbox';
import {ChipsModule} from 'primeng/chips';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ColorPickerModule} from 'primeng/colorpicker';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DataViewModule} from 'primeng/dataview';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {FieldsetModule} from 'primeng/fieldset';
import {FileUploadModule} from 'primeng/fileupload';
import {FullCalendarModule} from 'primeng/fullcalendar';
import {GalleriaModule} from 'primeng/galleria';
import {InplaceModule} from 'primeng/inplace';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {LightboxModule} from 'primeng/lightbox';
import {ListboxModule} from 'primeng/listbox';
import {MegaMenuModule} from 'primeng/megamenu';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MultiSelectModule} from 'primeng/multiselect';
import {OrderListModule} from 'primeng/orderlist';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {PaginatorModule} from 'primeng/paginator';
import {PanelModule} from 'primeng/panel';
import {PanelMenuModule} from 'primeng/panelmenu';
import {PasswordModule} from 'primeng/password';
import {PickListModule} from 'primeng/picklist';
import {ProgressBarModule} from 'primeng/progressbar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {SelectButtonModule} from 'primeng/selectbutton';
import {SidebarModule} from 'primeng/sidebar';
import {SlideMenuModule} from 'primeng/slidemenu';
import {SliderModule} from 'primeng/slider';
import {SplitButtonModule} from 'primeng/splitbutton';
import {StepsModule} from 'primeng/steps';
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import {TerminalModule} from 'primeng/terminal';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {ToastModule} from 'primeng/toast';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {ToolbarModule} from 'primeng/toolbar';
import {TooltipModule} from 'primeng/tooltip';
import {TreeModule} from 'primeng/tree';
import {TreeTableModule} from 'primeng/treetable';
import {VirtualScrollerModule} from 'primeng/virtualscroller';

// Application Components
import {AppCodeModule} from './app.code.component';
import {AppComponent} from './app.component';
import {AppMainComponent} from './app.main.component';
import {AppMenuComponent} from './app.menu.component';
import {AppMenuitemComponent} from './app.menuitem.component';
import {AppBreadcrumbComponent} from './app.breadcrumb.component';
import {AppConfigComponent} from './app.config.component';
import {AppTopBarComponent} from './app.topbar.component';
import {AppFooterComponent} from './app.footer.component';
import {AppHelpComponent} from './pages/app.help.component';
import {AppNotfoundComponent} from './pages/app.notfound.component';
import {AppErrorComponent} from './pages/app.error.component';
import {AppAccessdeniedComponent} from './pages/app.accessdenied.component';
import {AppLoginComponent} from './pages/app.login.component';



// Demo services
import {BreadcrumbService} from './app.breadcrumb.service';
import {MenuService} from './app.menu.service';
import { DashComponent } from './views/Dash/Dash.component';
import { JwtInterceptorService } from './services/JwtInterceptor.service';
import { JwtUnAuthorizedService } from './services/JwtUnAuthorized.service';
import { jwtTokenGetter } from './helpers/utils';
import { AppLogoutComponent } from './pages/AppLogout/AppLogout.component';
import { RolesUsuariosComponent } from './seguridad/RolesUsuarios/RolesUsuarios.component';
import { OpcionesSistemaComponent } from './seguridad/OpcionesSistema/OpcionesSistema.component';
import { UsuariosComponent } from './seguridad/Usuarios/Usuarios.component';
import { OpcionesRolComponent } from './seguridad/OpcionesRol/OpcionesRol.component';
import { TemasComponent } from './tablas/Temas/Temas.component';
import { TiposGraficosComponent } from './tablas/TiposGraficos/TiposGraficos.component';
import { ParametrosSistemaComponent } from './configuracion/ParametrosSistema/ParametrosSistema.component';
import { IndicadoresComponent } from './configuracion/Indicadores/Indicadores.component';
import { VisualizacionIndicadoresComponent } from './visualizacion/VisualizacionIndicadores/VisualizacionIndicadores.component';
import { GraficoStandardComponent } from './views/GraficoStandard/GraficoStandard.component';
import { VisualizacionTacometrosComponent } from './visualizacion/VisualizacionTacometros/VisualizacionTacometros.component';
import { GraficoMapaComponent } from './views/GraficoMapa/GraficoMapa.component';
import { ReportesComponent } from './configuracion/Reportes/Reportes.component';
import { VisualizacionMapasComponent } from './visualizacion/VisualizacionMapas/VisualizacionMapas.component';
import { DetalleIndicadoresComponent } from './configuracion/DetalleIndicadores/DetalleIndicadores.component';
import { PeriodosComponent } from './tablas/Periodos/Periodos.component';
import { TablaNacionalResumenIndicadoresComponent } from './views/TablaNacionalResumenIndicadores/TablaNacionalResumenIndicadores.component';
import { VisualizacionGraficosNacionalesComponent } from './visualizacion/VisualizacionGraficosNacionales/VisualizacionGraficosNacionales.component';
import { DepartamentosComponent } from './tablas/Departamentos/Departamentos.component';
import { TablaIndicadoresDepartamentosComponent } from './views/TablaIndicadoresDepartamentos/TablaIndicadoresDepartamentos.component';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        DevExtremeModule,
        AccordionModule,
        AutoCompleteModule,
        BreadcrumbModule,
        ButtonModule,
        CalendarModule,
        CardModule,
        CarouselModule,
        ChartModule,
        CheckboxModule,
        ChipsModule,
        CodeHighlighterModule,
        ConfirmDialogModule,
        ColorPickerModule,
        ContextMenuModule,
        DataViewModule,
        DialogModule,
        DropdownModule,
        FieldsetModule,
        FileUploadModule,
        FullCalendarModule,
        GalleriaModule,
        InplaceModule,
        InputNumberModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        LightboxModule,
        ListboxModule,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        MessageModule,
        MessagesModule,
        MultiSelectModule,
        OrderListModule,
        OrganizationChartModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PasswordModule,
        PickListModule,
        ProgressBarModule,
        RadioButtonModule,
        RatingModule,
        RippleModule,
        ScrollPanelModule,
        SelectButtonModule,
        SidebarModule,
        SlideMenuModule,
        SliderModule,
        SplitButtonModule,
        StepsModule,
        TableModule,
        TabMenuModule,
        TabViewModule,
        TerminalModule,
        TieredMenuModule,
        ToastModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
        TreeModule,
        TreeTableModule,
        VirtualScrollerModule,
        HighchartsChartModule,
        AppCodeModule,
        JwtModule.forRoot({
            config: {
              tokenGetter: jwtTokenGetter
            }
          }),
    ],
    declarations: [
        AppComponent,
        AppMainComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppConfigComponent,
        AppBreadcrumbComponent,
        DashComponent,
        AppLoginComponent,
        AppHelpComponent,
        AppNotfoundComponent,
        AppErrorComponent,
        AppAccessdeniedComponent,
        DashComponent,
        AppLogoutComponent,
        RolesUsuariosComponent,
        UsuariosComponent,
        OpcionesSistemaComponent,
        OpcionesRolComponent,
        TemasComponent,
        TiposGraficosComponent,
        ParametrosSistemaComponent,
        IndicadoresComponent,
        DetalleIndicadoresComponent,
        VisualizacionIndicadoresComponent,
        VisualizacionTacometrosComponent,
        VisualizacionMapasComponent,
        GraficoStandardComponent,
        GraficoMapaComponent,
        ReportesComponent,
        PeriodosComponent,
        TablaNacionalResumenIndicadoresComponent,
        VisualizacionGraficosNacionalesComponent,
        DepartamentosComponent,
        TablaIndicadoresDepartamentosComponent


   ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: JwtUnAuthorizedService, multi: true },
        {provide: LocationStrategy, useClass: HashLocationStrategy},
         MenuService, BreadcrumbService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
