import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card10v2Component } from './card10v2.component';

describe('Card10v2Component', () => {
  let component: Card10v2Component;
  let fixture: ComponentFixture<Card10v2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Card10v2Component]
    });
    fixture = TestBed.createComponent(Card10v2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
