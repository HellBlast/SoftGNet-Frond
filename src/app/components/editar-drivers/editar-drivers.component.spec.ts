import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDriversComponent } from './editar-drivers.component';

describe('EditarDriversComponent', () => {
  let component: EditarDriversComponent;
  let fixture: ComponentFixture<EditarDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarDriversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
