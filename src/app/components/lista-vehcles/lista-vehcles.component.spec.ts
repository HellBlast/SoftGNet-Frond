import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVehclesComponent } from './lista-vehcles.component';

describe('ListaVehclesComponent', () => {
  let component: ListaVehclesComponent;
  let fixture: ComponentFixture<ListaVehclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaVehclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaVehclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
