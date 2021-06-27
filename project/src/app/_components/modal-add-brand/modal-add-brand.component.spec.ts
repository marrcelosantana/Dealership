import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddBrandComponent } from './modal-add-brand.component';

describe('ModalAddBrandComponent', () => {
  let component: ModalAddBrandComponent;
  let fixture: ComponentFixture<ModalAddBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddBrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
