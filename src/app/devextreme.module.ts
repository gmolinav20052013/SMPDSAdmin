import { NgModule } from '@angular/core';
import { DxButtonModule, DxDataGridModule, DxSelectBoxModule,
         DxNumberBoxModule, DxFormModule,  DxTabPanelModule,
         DxListModule, DxTemplateModule, DxTextBoxModule,
         DxTreeViewModule,
         DxDropDownBoxModule,
         DxTextAreaModule,
         DxTagBoxModule,
         DxDateBoxModule,
         DxHtmlEditorModule} from 'devextreme-angular';


@NgModule({
  exports: [
    DxButtonModule,
    DxDataGridModule,
    DxNumberBoxModule,
    DxSelectBoxModule,
    DxFormModule,
    DxTabPanelModule,
    DxTreeViewModule,
    DxListModule,
    DxTemplateModule,
    DxDropDownBoxModule,
    DxTagBoxModule,
    DxTextBoxModule,
    DxTextAreaModule,
    DxDateBoxModule,
    DxHtmlEditorModule
  ]
})
export class DevExtremeModule { }
