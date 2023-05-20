import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarsComponent} from './features/home/components/cars/cars.component';
import { CarDetailsPageComponent } from './features/home/pages/car-details-page/car-details-page.component';
import { SellCarPageComponent } from './features/home/pages/sell-car-page/sell-car-page.component';
import { LoginPageComponent } from './features/login/pages/login-page/login-page.component';
import { RegisterPageComponent } from './features/login/pages/register-page/register-page.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
},
{
  path: 'login',
  component:LoginPageComponent,
},
{
  path: 'register',
  component:RegisterPageComponent,
},
{
  path: 'cars',
  component:CarsComponent, canActivate: [AuthGuard]
},
{
  path: 'cars/details/:carId',
  component:CarDetailsPageComponent, canActivate: [AuthGuard]
},
{
  path: 'cars/sell',
  component:SellCarPageComponent, canActivate: [AuthGuard]
},
// {
//   path: '**',
//   redirectTo: '/cars'
// }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
