import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InstallmentPipe } from './pipes/installment.pipe';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    InstallmentPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    InstallmentPipe,
  ],
})
export class SharedModule { }
