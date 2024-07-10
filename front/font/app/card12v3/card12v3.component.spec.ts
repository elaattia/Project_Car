import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card12v3Component } from './card12v3.component';

describe('Card12v3Component', () => {
  let component: Card12v3Component;
  let fixture: ComponentFixture<Card12v3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Card12v3Component]
    });
    fixture = TestBed.createComponent(Card12v3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
