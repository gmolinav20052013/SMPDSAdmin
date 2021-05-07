/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PeriodosService } from './Periodos.service';

describe('Service: Periodos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeriodosService]
    });
  });

  it('should ...', inject([PeriodosService], (service: PeriodosService) => {
    expect(service).toBeTruthy();
  }));
});
