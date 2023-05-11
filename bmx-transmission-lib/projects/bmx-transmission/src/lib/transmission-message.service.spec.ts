import { TestBed } from '@angular/core/testing';

import { TransmissionMessageService } from './transmission-message.service';

describe('TransmissionMessageService', () => {
  let service: TransmissionMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransmissionMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
