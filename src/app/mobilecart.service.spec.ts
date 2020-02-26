import { TestBed } from '@angular/core/testing';

import { MobilecartService } from './mobilecart.service';

describe('MobilecartService', () => {
  let service: MobilecartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobilecartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
