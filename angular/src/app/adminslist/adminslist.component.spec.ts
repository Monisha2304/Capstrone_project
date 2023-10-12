import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminslistComponent } from './adminslist.component';

describe('AdminslistComponent', () => {
  let component: AdminslistComponent;
  let fixture: ComponentFixture<AdminslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminslistComponent]
    });
    fixture = TestBed.createComponent(AdminslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
