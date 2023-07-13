import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAirCraftComponent } from './add-air-craft.component';

describe('AddAirCraftComponent', () => {
  let component: AddAirCraftComponent;
  let fixture: ComponentFixture<AddAirCraftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAirCraftComponent]
    });
    fixture = TestBed.createComponent(AddAirCraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
