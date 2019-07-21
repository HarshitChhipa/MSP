import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatInputModule, MatSelectModule, MatSnackBarModule } from '@angular/material';


const materialModuleList = [
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ...materialModuleList
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
