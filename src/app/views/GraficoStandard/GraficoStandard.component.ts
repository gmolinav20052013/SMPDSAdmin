import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
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
  selector: 'app-GraficoStandard',
  templateUrl: './GraficoStandard.component.html',
  styleUrls: ['./GraficoStandard.component.scss']
})
export class GraficoStandardComponent implements OnInit {

    @Input() IdIndicador = 0;

    title = 'myHighChartsStandard';
  highcharts = Highcharts;
  chartOptions: any = null;

  constructor(public indicadoresservice: IndicadoresSMPDSService) { }

  ngOnInit() {
      this.obtenerDatosGrafico(this.IdIndicador);
  }

  obtenerDatosGrafico(indicador: number) {
    this.chartOptions = null;
    return this.indicadoresservice.DatosGrafico(indicador).subscribe(
      (resp: any) => {
          this.chartOptions = resp.datagrafico;
          console.log(this.chartOptions);

      },
      (err) => {

      },
      () => {  }
    );
  }

}
