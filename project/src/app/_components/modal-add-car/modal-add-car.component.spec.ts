import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddCarComponent } from './modal-add-car.component';

describe('ModalAddCarComponent', () => {
  let component: ModalAddCarComponent;
  let fixture: ComponentFixture<ModalAddCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
