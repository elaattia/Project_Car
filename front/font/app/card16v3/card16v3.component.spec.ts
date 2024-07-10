import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card16v3Component } from './card16v3.component';

describe('Card16v3Component', () => {
  let component: Card16v3Component;
  let fixture: ComponentFixture<Card16v3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Card16v3Component]
    });
    fixture = TestBed.createComponent(Card16v3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
