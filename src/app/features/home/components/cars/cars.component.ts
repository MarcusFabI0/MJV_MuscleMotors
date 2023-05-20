import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car.model';
import { CarsService } from 'src/app/shared/services/cars.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
  cars: Array<Car> = [];

  constructor(private carsService: CarsService, private router: Router) {}

  ngOnInit(): void {
    this.carsService.getCars().subscribe((cars) => {
      //console.log(cars);
      this.cars = cars;
    });
  }

  carDetails(carId: number) {
    this.router.navigateByUrl(`/cars/details/${carId}`);
  }

  logout() {
    window.sessionStorage.clear();
  }
}
