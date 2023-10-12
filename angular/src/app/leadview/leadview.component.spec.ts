import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadviewComponent } from './leadview.component';

describe('LeadviewComponent', () => {
  let component: LeadviewComponent;
  let fixture: ComponentFixture<LeadviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadviewComponent]
    });
    fixture = TestBed.createComponent(LeadviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
