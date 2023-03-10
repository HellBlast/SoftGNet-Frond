import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarVehiclesComponent } from './editar-vehicles.component';

describe('EditarVehiclesComponent', () => {
  let component: EditarVehiclesComponent;
  let fixture: ComponentFixture<EditarVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarVehiclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
