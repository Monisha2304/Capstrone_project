import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindetailsPopupComponent } from './admindetails-popup.component';

describe('AdmindetailsPopupComponent', () => {
  let component: AdmindetailsPopupComponent;
  let fixture: ComponentFixture<AdmindetailsPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmindetailsPopupComponent]
    });
    fixture = TestBed.createComponent(AdmindetailsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
