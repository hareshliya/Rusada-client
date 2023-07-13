import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirCraftsListComponent } from './air-crafts-list.component';

describe('AirCraftsListComponent', () => {
  let component: AirCraftsListComponent;
  let fixture: ComponentFixture<AirCraftsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirCraftsListComponent]
    });
    fixture = TestBed.createComponent(AirCraftsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
