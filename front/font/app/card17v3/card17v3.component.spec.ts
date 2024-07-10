import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card17v3Component } from './card17v3.component';

describe('Card17v3Component', () => {
  let component: Card17v3Component;
  let fixture: ComponentFixture<Card17v3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Card17v3Component]
    });
    fixture = TestBed.createComponent(Card17v3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
