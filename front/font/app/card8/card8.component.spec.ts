import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card8Component } from './card8.component';

describe('Card8Component', () => {
  let component: Card8Component;
  let fixture: ComponentFixture<Card8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Card8Component]
    });
    fixture = TestBed.createComponent(Card8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
