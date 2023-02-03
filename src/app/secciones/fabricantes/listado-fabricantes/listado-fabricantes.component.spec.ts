import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoFabricantesComponent } from './listado-fabricantes.component';

describe('ListadoFabricantesComponent', () => {
  let component: ListadoFabricantesComponent;
  let fixture: ComponentFixture<ListadoFabricantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoFabricantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoFabricantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
