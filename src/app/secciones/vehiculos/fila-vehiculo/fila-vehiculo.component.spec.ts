import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaVehiculoComponent } from './fila-vehiculo.component';

describe('FilaVehiculoComponent', () => {
  let component: FilaVehiculoComponent;
  let fixture: ComponentFixture<FilaVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilaVehiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilaVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
