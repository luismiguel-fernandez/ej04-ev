import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaVehiculoComponent } from './tarjeta-vehiculo.component';

describe('TarjetaVehiculoComponent', () => {
  let component: TarjetaVehiculoComponent;
  let fixture: ComponentFixture<TarjetaVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaVehiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
