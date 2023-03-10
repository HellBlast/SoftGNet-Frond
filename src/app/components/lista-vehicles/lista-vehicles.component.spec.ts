import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVehiclesComponent } from './lista-vehicles.component';

describe('ListaVehiclesComponent', () => {
  let component: ListaVehiclesComponent;
  let fixture: ComponentFixture<ListaVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaVehiclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
