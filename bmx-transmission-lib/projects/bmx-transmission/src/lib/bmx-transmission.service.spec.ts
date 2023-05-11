import { TestBed } from '@angular/core/testing';

import { BmxTransmissionService } from './bmx-transmission.service';

describe('BmxTransmissionService', () => {
  let service: BmxTransmissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BmxTransmissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
