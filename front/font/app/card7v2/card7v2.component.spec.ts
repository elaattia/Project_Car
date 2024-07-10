import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card7v2Component } from './card7v2.component';

describe('Card7v2Component', () => {
  let component: Card7v2Component;
  let fixture: ComponentFixture<Card7v2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Card7v2Component]
    });
    fixture = TestBed.createComponent(Card7v2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
