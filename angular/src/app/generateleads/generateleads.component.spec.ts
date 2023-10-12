import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateleadsComponent } from './generateleads.component';

describe('GenerateleadsComponent', () => {
  let component: GenerateleadsComponent;
  let fixture: ComponentFixture<GenerateleadsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateleadsComponent]
    });
    fixture = TestBed.createComponent(GenerateleadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
