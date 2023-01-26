import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricantesComponent } from './fabricantes.component';

describe('FabricantesComponent', () => {
  let component: FabricantesComponent;
  let fixture: ComponentFixture<FabricantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FabricantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabricantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
