import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSchedulesComponent } from './lista-schedules.component';

describe('ListaSchedulesComponent', () => {
  let component: ListaSchedulesComponent;
  let fixture: ComponentFixture<ListaSchedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSchedulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
