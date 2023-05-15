import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellCarPageComponent } from './sell-car-page.component';

describe('SellCarPageComponent', () => {
  let component: SellCarPageComponent;
  let fixture: ComponentFixture<SellCarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellCarPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellCarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
