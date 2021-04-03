import {Component, OnInit} from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import esMessages from 'devextreme/localization/messages/es.json';
import { locale, loadMessages } from 'devextreme/localization';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{

    constructor(private primengConfig: PrimeNGConfig) {

        loadMessages(esMessages);
        locale('es-SV');

    }

    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}
