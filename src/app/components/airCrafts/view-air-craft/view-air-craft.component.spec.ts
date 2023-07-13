import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAirCraftComponent } from './view-air-craft.component';

describe('ViewAirCraftComponent', () => {
  let component: ViewAirCraftComponent;
  let fixture: ComponentFixture<ViewAirCraftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAirCraftComponent]
    });
    fixture = TestBed.createComponent(ViewAirCraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
