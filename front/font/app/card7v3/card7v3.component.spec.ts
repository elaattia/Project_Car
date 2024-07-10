import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card7v3Component } from './card7v3.component';

describe('Card7v3Component', () => {
  let component: Card7v3Component;
  let fixture: ComponentFixture<Card7v3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Card7v3Component]
    });
    fixture = TestBed.createComponent(Card7v3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
