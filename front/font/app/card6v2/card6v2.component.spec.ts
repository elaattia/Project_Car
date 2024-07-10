import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card6v2Component } from './card6v2.component';

describe('Card6v2Component', () => {
  let component: Card6v2Component;
  let fixture: ComponentFixture<Card6v2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Card6v2Component]
    });
    fixture = TestBed.createComponent(Card6v2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
