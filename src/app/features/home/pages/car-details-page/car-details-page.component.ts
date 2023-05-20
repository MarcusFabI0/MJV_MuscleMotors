import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car.model';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from 'src/app/shared/services/cars.service';

@Component({
  templateUrl: './car-details-page.component.html',
  styleUrls: ['./car-details-page.component.scss'],
})
export class CarDetailsPageComponent implements OnInit {
  car?: Car;

  constructor(
    private activedRoute: ActivatedRoute,
    private carsService: CarsService
  ) {}

  ngOnInit() {
    this.activedRoute.params.subscribe((params) => {
      const id = parseInt(params['carId']);
      this.carsService.getById(id).subscribe((car) => {
        this.car = car;
      });
    });
  }

  currentIndex = 0;
  incrementIndex() {
    this.activedRoute.params.subscribe((params) => {
      const id = parseInt(params['carId']);
      this.carsService.getById(id).subscribe((car) => {
        this.car = car;
        const images = car.images;
        this.currentIndex = this.currentIndex + 1;
        if (this.currentIndex > images.length - 1) {
          this.currentIndex = 0;
        }
        console.log(this.currentIndex);
        return this.currentIndex;
      });
    });
  }

  decrementIndex() {
    this.activedRoute.params.subscribe((params) => {
      const id = parseInt(params['carId']);
      this.carsService.getById(id).subscribe((car) => {
        this.car = car;
        const images = car.images!;
        this.currentIndex = this.currentIndex - 1;
        if (this.currentIndex < 0) {
          this.currentIndex = images.length - 1;
        }
        console.log(this.currentIndex);
        return this.currentIndex;
      });
    });
  }
}
