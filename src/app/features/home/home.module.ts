import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarsComponent } from './components/cars/cars.component';
import { CarDetailsPageComponent } from './pages/car-details-page/car-details-page.component';
import { CreateSalePageComponent } from './pages/create-sale-page/create-sale-page.component';
import { SellCarPageComponent } from './pages/sell-car-page/sell-car-page.component';


@NgModule({
  declarations: [
    CarsComponent,
    CarDetailsPageComponent,
    SellCarPageComponent,
    CreateSalePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    CarsComponent
  ]
})
export class HomeModule { }
