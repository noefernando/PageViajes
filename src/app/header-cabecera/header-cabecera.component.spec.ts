import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCabeceraComponent } from './header-cabecera.component';

describe('HeaderCabeceraComponent', () => {
  let component: HeaderCabeceraComponent;
  let fixture: ComponentFixture<HeaderCabeceraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderCabeceraComponent]
    });
    fixture = TestBed.createComponent(HeaderCabeceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
