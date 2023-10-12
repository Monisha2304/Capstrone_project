import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamleadsviewComponent } from './teamleadsview.component';

describe('TeamleadsviewComponent', () => {
  let component: TeamleadsviewComponent;
  let fixture: ComponentFixture<TeamleadsviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamleadsviewComponent]
    });
    fixture = TestBed.createComponent(TeamleadsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
