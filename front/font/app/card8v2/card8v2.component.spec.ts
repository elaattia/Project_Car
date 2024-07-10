import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card8v2Component } from './card8v2.component';

describe('Card8v2Component', () => {
  let component: Card8v2Component;
  let fixture: ComponentFixture<Card8v2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Card8v2Component]
    });
    fixture = TestBed.createComponent(Card8v2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
