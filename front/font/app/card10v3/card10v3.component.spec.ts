import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card10v3Component } from './card10v3.component';

describe('Card10v3Component', () => {
  let component: Card10v3Component;
  let fixture: ComponentFixture<Card10v3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Card10v3Component]
    });
    fixture = TestBed.createComponent(Card10v3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
