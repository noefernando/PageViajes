import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajesHotelComponent } from './viajes-hotel.component';

describe('ViajesHotelComponent', () => {
  let component: ViajesHotelComponent;
  let fixture: ComponentFixture<ViajesHotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViajesHotelComponent]
    });
    fixture = TestBed.createComponent(ViajesHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
