/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TablaIndicadoresDepartamentosComponent } from './TablaIndicadoresDepartamentos.component';

describe('TablaIndicadoresDepartamentosComponent', () => {
  let component: TablaIndicadoresDepartamentosComponent;
  let fixture: ComponentFixture<TablaIndicadoresDepartamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaIndicadoresDepartamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaIndicadoresDepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
