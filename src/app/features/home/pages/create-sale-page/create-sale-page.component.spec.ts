import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSalePageComponent } from './create-sale-page.component';

describe('CreateSalePageComponent', () => {
  let component: CreateSalePageComponent;
  let fixture: ComponentFixture<CreateSalePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSalePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSalePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
