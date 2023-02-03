import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaFabricanteComponent } from './tarjeta-fabricante.component';

describe('TarjetaFabricanteComponent', () => {
  let component: TarjetaFabricanteComponent;
  let fixture: ComponentFixture<TarjetaFabricanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaFabricanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaFabricanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
