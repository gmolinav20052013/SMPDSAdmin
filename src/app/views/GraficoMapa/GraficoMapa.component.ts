import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highmaps';
import svMap from "@highcharts/map-collection/countries/sv/sv-all.geo.json";
import More from 'highcharts/highcharts-more';
More(Highcharts);
import  Drilldown  from 'highcharts/modules/drilldown';
Drilldown(Highcharts);
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsExportData from 'highcharts/modules/export-data';
import { IndicadoresSMPDSService } from 'src/app/services/IndicadoresSMPDS.service';
HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);

@Component({
  selector: 'app-GraficoMapa',
  templateUrl: './GraficoMapa.component.html',
  styleUrls: ['./GraficoMapa.component.scss']
})
export class GraficoMapaComponent implements OnInit {

    @Input() IdIndicador = 0;

  constructor(public indicadoresservice: IndicadoresSMPDSService) { }

  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor = "mapChart";

  chartOptions: Highcharts.Options = {
        chart: {
        map: svMap
        },
        series: [{ type: 'map' }]
    };

    tipo = {
        chart: {
        map: svMap
        },
    };


  ngOnInit() {

    this.obtenerDatosGrafico(this.IdIndicador);
  }



    obtenerDatosGrafico(indicador: number) {
      this.chartOptions = null;
      return this.indicadoresservice.DatosGrafico(indicador).subscribe(
        (resp: any) => {

            this.chartOptions = {...this.tipo, ...resp.datagrafico};

        },
        (err) => {

        },
        () => {  }
      );
    }

}
