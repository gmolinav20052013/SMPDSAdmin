/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DetalleIndicadoresService } from './DetalleIndicadores.service';

describe('Service: DetalleIndicadores', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetalleIndicadoresService]
    });
  });

  it('should ...', inject([DetalleIndicadoresService], (service: DetalleIndicadoresService) => {
    expect(service).toBeTruthy();
  }));
});
