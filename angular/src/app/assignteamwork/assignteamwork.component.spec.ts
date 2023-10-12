import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignteamworkComponent } from './assignteamwork.component';

describe('AssignteamworkComponent', () => {
  let component: AssignteamworkComponent;
  let fixture: ComponentFixture<AssignteamworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignteamworkComponent]
    });
    fixture = TestBed.createComponent(AssignteamworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
