import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card11v2Component } from './card11v2.component';

describe('Card11v2Component', () => {
  let component: Card11v2Component;
  let fixture: ComponentFixture<Card11v2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Card11v2Component]
    });
    fixture = TestBed.createComponent(Card11v2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
