import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card9v2Component } from './card9v2.component';

describe('Card9v2Component', () => {
  let component: Card9v2Component;
  let fixture: ComponentFixture<Card9v2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Card9v2Component]
    });
    fixture = TestBed.createComponent(Card9v2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
