import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    nombreApp = environment.nombreApp;

    constructor(public app: AppMainComponent) {}

}
