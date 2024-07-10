import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card4v2Component } from './card4v2.component';

describe('Card4v2Component', () => {
  let component: Card4v2Component;
  let fixture: ComponentFixture<Card4v2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Card4v2Component]
    });
    fixture = TestBed.createComponent(Card4v2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
