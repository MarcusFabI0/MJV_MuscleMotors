import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { Car } from 'src/app/features/home/models/car.model';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  baseUrl: string = 'http://localhost:3000';

  options = {
    headers: {
      'content-type': 'application/json',
    },
  };

  cars: Array<Car> = [];
  constructor(private http: HttpClient) {}

  getCars(): Observable<Array<Car>> {
    return this.http.get<Array<Car>>(this.baseUrl + `/cars`, this.options);
  }
  getById(id: number) {
    return this.http.get<Car>(this.baseUrl + `/cars/${id}`, this.options);
  }

  //POST
  postCars(car: Partial<Car>) {
    return this.http
      .post(this.baseUrl + `/cars`, car, this.options)
      .pipe(delay(2500));
  }
}
