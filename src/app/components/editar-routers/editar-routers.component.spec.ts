import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRoutersComponent } from './editar-routers.component';

describe('EditarRoutersComponent', () => {
  let component: EditarRoutersComponent;
  let fixture: ComponentFixture<EditarRoutersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarRoutersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarRoutersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
