import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoVehiculosComponent } from './listado-vehiculos.component';

describe('ListadoVehiculosComponent', () => {
  let component: ListadoVehiculosComponent;
  let fixture: ComponentFixture<ListadoVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoVehiculosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
