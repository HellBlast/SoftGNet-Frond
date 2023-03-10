import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRoutersComponent } from './lista-routers.component';

describe('ListaRoutersComponent', () => {
  let component: ListaRoutersComponent;
  let fixture: ComponentFixture<ListaRoutersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaRoutersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaRoutersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
