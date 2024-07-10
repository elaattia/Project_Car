import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card15v3Component } from './card15v3.component';

describe('Card15v3Component', () => {
  let component: Card15v3Component;
  let fixture: ComponentFixture<Card15v3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Card15v3Component]
    });
    fixture = TestBed.createComponent(Card15v3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
