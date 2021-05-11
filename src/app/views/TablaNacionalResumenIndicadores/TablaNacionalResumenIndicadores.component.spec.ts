/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TablaNacionalResumenIndicadoresComponent } from './TablaNacionalResumenIndicadores.component';

describe('TablaNacionalResumenIndicadoresComponent', () => {
  let component: TablaNacionalResumenIndicadoresComponent;
  let fixture: ComponentFixture<TablaNacionalResumenIndicadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaNacionalResumenIndicadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaNacionalResumenIndicadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
