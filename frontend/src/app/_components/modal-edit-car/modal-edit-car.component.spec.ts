import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditCarComponent } from './modal-edit-car.component';

describe('ModalEditCarComponent', () => {
  let component: ModalEditCarComponent;
  let fixture: ComponentFixture<ModalEditCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
