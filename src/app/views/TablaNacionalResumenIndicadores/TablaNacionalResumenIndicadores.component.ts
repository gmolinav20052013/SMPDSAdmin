import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { RegistroTabla } from 'src/app/model/RegistroTabla';
import { IndicadoresSMPDSService } from 'src/app/services/IndicadoresSMPDS.service';
import { environment } from 'src/environments/environment';
import  ExcelJS  from 'exceljs';
import { saveAs } from 'file-saver';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { DatePipe } from '@angular/common';
import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import autoTable from 'jspdf-autotable';
import { DxDataGridComponent } from 'devextreme-angular';


@Component({
    selector: 'app-TablaNacionalResumenIndicadores',
    templateUrl: './TablaNacionalResumenIndicadores.component.html',
    styleUrls: ['./TablaNacionalResumenIndicadores.component.scss']
  })
  export class TablaNacionalResumenIndicadoresComponent implements OnInit {


    @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;

    @Input() IdIndicador = 0;



    nombreApp = environment.nombreApp;
    public data: RegistroTabla[] = [];
    tituloColumnas: string[] = [];
    tituloReporte = '';

  constructor(public indicadoresservice: IndicadoresSMPDSService) { }

  ngOnInit() {
      this.obtenerDatosGrafico(this.IdIndicador);
  }



  exportGrid(e) {
    const doc = new jsPDF('landscape');
    autoTable(doc, {
        theme: 'striped',
      });
    exportDataGridToPdf({
        jsPDFDocument: doc,
        component: this.dataGrid.instance
    }).then(() => {
        doc.save('IndicadoresXDepartamento.pdf');
    })
}


  onExporting(e) {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Indicadores');

    const datepipe: DatePipe = new DatePipe('en-US');

    const fecha =new Date();
    const fechaoutput = datepipe.transform(fecha, 'yyyyMMddHHmmss');

    const nombreArchivo = `IndicadoresXDepartamento${fechaoutput}.xlsx`


    exportDataGrid({
      component: e.component,
      worksheet: worksheet,
      autoFilterEnabled: true
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), nombreArchivo);
      });
    });
    e.cancel = true;
  }


  onCellPrepared(e) {

    if(e.rowType === "header" ) {
        e.cellElement.style.backgroundColor = "#2D52A8";
        e.cellElement.style.color= "#FFFFFF";
    }

    if (e.rowType === 'data' && e.column.dataField === "Avance") {
        if (e.data.Avance === 1) {
            e.cellElement.style.backgroundColor = "#ED1C24";
            e.cellElement.style.color = "#ED1C24";
        }
        if (e.data.Avance === 2) {
            e.cellElement.style.backgroundColor = "#FFCB04";
            e.cellElement.style.color = "#FFCB04";
        }
        if (e.data.Avance === 3) {
            e.cellElement.style.backgroundColor = "#8DC73F";
            e.cellElement.style.color = "#8DC73F";
        }
        if (e.data.Avance === 4) {
            e.cellElement.style.backgroundColor = "#0089D0";
            e.cellElement.style.color = "#0089D0";
        }
        e.data.Avance = null;
    }

  }


  obtenerDatosGrafico(indicador: number) {

    return this.indicadoresservice.DatosGrafico(indicador).subscribe(
      (resp: any) => {
          this.data = resp.datagrafico;
          this.tituloColumnas = resp.titulocolumnas;
          this.tituloReporte = resp.tituloreporte;

       //   console.log(this.tituloColumnas);

      },
      (err) => {

      },
      () => {  }
    );
  }

}

