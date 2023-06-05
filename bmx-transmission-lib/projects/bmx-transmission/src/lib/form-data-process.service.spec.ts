import { TestBed } from '@angular/core/testing';

import { FormDataProcessService } from './form-data-process.service';

describe('FormDataProcessService', () => {
  let service: FormDataProcessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormDataProcessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
