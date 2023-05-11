import { TestBed } from '@angular/core/testing';

import { TransmissionPasteboxService } from './transmission-pastebox.service';

describe('TransmissionPasteboxService', () => {
  let service: TransmissionPasteboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransmissionPasteboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
