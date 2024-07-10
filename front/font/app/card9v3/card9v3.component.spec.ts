import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card9v3Component } from './card9v3.component';

describe('Card9v3Component', () => {
  let component: Card9v3Component;
  let fixture: ComponentFixture<Card9v3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Card9v3Component]
    });
    fixture = TestBed.createComponent(Card9v3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
