import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmxTransmissionComponent } from './bmx-transmission.component';

describe('BmxTransmissionComponent', () => {
  let component: BmxTransmissionComponent;
  let fixture: ComponentFixture<BmxTransmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmxTransmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmxTransmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
