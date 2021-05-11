/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VisualizacionGraficosNacionalesComponent } from './VisualizacionGraficosNacionales.component';

describe('VisualizacionGraficosNacionalesComponent', () => {
  let component: VisualizacionGraficosNacionalesComponent;
  let fixture: ComponentFixture<VisualizacionGraficosNacionalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizacionGraficosNacionalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizacionGraficosNacionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
