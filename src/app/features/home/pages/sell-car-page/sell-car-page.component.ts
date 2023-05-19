import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarsService } from 'src/app/shared/services/cars.service';

@Component({
  templateUrl: './sell-car-page.component.html',
  styleUrls: ['./sell-car-page.component.scss'],
})
export class SellCarPageComponent {
  error? = false;
  buttonLoading = false;
  formSell = new FormGroup({
    brand: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    model: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    year: new FormControl('', {
      nonNullable: true,
      validators: Validators.compose([
        Validators.required,
        Validators.pattern(/^\d{4}$/),
      ]),
    }),
    mileage: new FormControl('', {
      nonNullable: true,
      validators: Validators.compose([
        Validators.required,
        Validators.pattern(/^\d+$/),
      ]),
    }),
    transmission: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    engine: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    shortDescription: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    price: new FormControl('', {
      nonNullable: false,
      validators: Validators.compose([
        Validators.required,
        Validators.pattern(/^\d+$/),
      ]),
    }),
  });

  formImages = new FormArray(
    [
      new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    ],
    [Validators.minLength(1), Validators.maxLength(5)]
  );

  constructor(private router: Router, private carService: CarsService) {}

  maxImages: number = 5;
  currentImages: number = 1;

  addImageControl() {
    if (this.currentImages < this.maxImages) {
      this.formImages.push(
        new FormControl('', {
          nonNullable: true,
          validators: [Validators.required],
        })
      );
      this.currentImages++;
    }
  }
  removeImageControl(idx: number) {
    this.formImages.removeAt(idx);
  }

  sellCar() {
    this.buttonLoading = true;
    const formSellValue = this.formSell.value;
    const formArrayValue = this.formImages.value;
    const price = parseInt(formSellValue.price!, 10);
    if (this.formSell.valid) {
      this.carService
        .postCars({
          brand: formSellValue.brand,
          model: formSellValue.model,
          year: formSellValue.year,
          mileage: formSellValue.mileage,
          transmission: formSellValue.transmission,
          engine: formSellValue.engine,
          shortDescription: formSellValue.shortDescription,
          price: price,
          images: formArrayValue,
        })
        .subscribe((res) => {
          this.router.navigateByUrl('/cars')
        });
    }
  }
}
