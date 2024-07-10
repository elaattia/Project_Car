import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card14v3Component } from './card14v3.component';

describe('Card14v3Component', () => {
  let component: Card14v3Component;
  let fixture: ComponentFixture<Card14v3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Card14v3Component]
    });
    fixture = TestBed.createComponent(Card14v3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
