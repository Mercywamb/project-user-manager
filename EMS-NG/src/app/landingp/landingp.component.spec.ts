import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpComponent } from './landingp.component';

describe('LandingpComponent', () => {
  let component: LandingpComponent;
  let fixture: ComponentFixture<LandingpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingpComponent]
    });
    fixture = TestBed.createComponent(LandingpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
