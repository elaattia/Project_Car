import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card11v3Component } from './card11v3.component';

describe('Card11v3Component', () => {
  let component: Card11v3Component;
  let fixture: ComponentFixture<Card11v3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Card11v3Component]
    });
    fixture = TestBed.createComponent(Card11v3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
