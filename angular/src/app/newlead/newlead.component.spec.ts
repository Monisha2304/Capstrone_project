import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewleadComponent } from './newlead.component';

describe('NewleadComponent', () => {
  let component: NewleadComponent;
  let fixture: ComponentFixture<NewleadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewleadComponent]
    });
    fixture = TestBed.createComponent(NewleadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
