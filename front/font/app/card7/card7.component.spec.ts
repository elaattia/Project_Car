import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card7Component } from './card7.component';

describe('Card7Component', () => {
  let component: Card7Component;
  let fixture: ComponentFixture<Card7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Card7Component]
    });
    fixture = TestBed.createComponent(Card7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
