import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card13v3Component } from './card13v3.component';

describe('Card13v3Component', () => {
  let component: Card13v3Component;
  let fixture: ComponentFixture<Card13v3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Card13v3Component]
    });
    fixture = TestBed.createComponent(Card13v3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
