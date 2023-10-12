import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeammembersPopupComponent } from './teammembers-popup.component';

describe('TeammembersPopupComponent', () => {
  let component: TeammembersPopupComponent;
  let fixture: ComponentFixture<TeammembersPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeammembersPopupComponent]
    });
    fixture = TestBed.createComponent(TeammembersPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
