import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimezComponent } from './estimez.component';

describe('EstimezComponent', () => {
  let component: EstimezComponent;
  let fixture: ComponentFixture<EstimezComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstimezComponent]
    });
    fixture = TestBed.createComponent(EstimezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
