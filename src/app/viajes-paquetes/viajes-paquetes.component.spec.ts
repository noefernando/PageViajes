import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajesPaquetesComponent } from './viajes-paquetes.component';

describe('ViajesPaquetesComponent', () => {
  let component: ViajesPaquetesComponent;
  let fixture: ComponentFixture<ViajesPaquetesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViajesPaquetesComponent]
    });
    fixture = TestBed.createComponent(ViajesPaquetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
