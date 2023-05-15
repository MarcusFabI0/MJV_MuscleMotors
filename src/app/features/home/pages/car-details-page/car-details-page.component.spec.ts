import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetailsPageComponent } from './car-details-page.component';

describe('CarDetailsPageComponent', () => {
  let component: CarDetailsPageComponent;
  let fixture: ComponentFixture<CarDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
