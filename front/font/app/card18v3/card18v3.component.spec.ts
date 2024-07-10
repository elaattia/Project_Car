import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card18v3Component } from './card18v3.component';

describe('Card18v3Component', () => {
  let component: Card18v3Component;
  let fixture: ComponentFixture<Card18v3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Card18v3Component]
    });
    fixture = TestBed.createComponent(Card18v3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
