import { TestBed } from '@angular/core/testing';

import { SalaryChartService } from './salary-chart.service';

describe('SalaryChartService', () => {
  let service: SalaryChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalaryChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
