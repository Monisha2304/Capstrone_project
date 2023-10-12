import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsalesteamComponent } from './addsalesteam.component';

describe('AddsalesteamComponent', () => {
  let component: AddsalesteamComponent;
  let fixture: ComponentFixture<AddsalesteamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddsalesteamComponent]
    });
    fixture = TestBed.createComponent(AddsalesteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
