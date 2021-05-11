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
    selector: 'app-TablaIndicadoresDepartamentos',
    templateUrl: './TablaIndicadoresDepartamentos.component.html',
    styleUrls: ['./TablaIndicadoresDepartamentos.component.scss']
  })
  export class TablaIndicadoresDepartamentosComponent implements OnInit {

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

  onCellPrepared(e) {

    if(e.rowType === "header" ) {
        e.cellElement.style.backgroundColor = "#2D52A8";
        e.cellElement.style.color= "#FFFFFF";
    }



  }


  exportGrid(e) {
    const doc = new jsPDF('landscape');
    autoTable(doc, {
        theme: 'striped',
      });
    //doc.autoPrint();
//    doc.autoTable({ head: headRows(), body: bodyRows(5), startY: 20 })
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


