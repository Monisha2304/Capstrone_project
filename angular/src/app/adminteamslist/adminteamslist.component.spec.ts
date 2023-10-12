import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminteamslistComponent } from './adminteamslist.component';

describe('AdminteamslistComponent', () => {
  let component: AdminteamslistComponent;
  let fixture: ComponentFixture<AdminteamslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminteamslistComponent]
    });
    fixture = TestBed.createComponent(AdminteamslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
