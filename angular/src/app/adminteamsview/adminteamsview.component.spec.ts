import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminteamsviewComponent } from './adminteamsview.component';

describe('AdminteamsviewComponent', () => {
  let component: AdminteamsviewComponent;
  let fixture: ComponentFixture<AdminteamsviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminteamsviewComponent]
    });
    fixture = TestBed.createComponent(AdminteamsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
