import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDriversComponent } from './lista-drivers.component';

describe('ListaDriversComponent', () => {
  let component: ListaDriversComponent;
  let fixture: ComponentFixture<ListaDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDriversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
