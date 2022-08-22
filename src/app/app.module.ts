import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealFinderComponent } from './meal-finder/meal-finder.component';
import { SingleMealComponent } from './single-meal/single-meal.component';

@NgModule({
  declarations: [AppComponent, MealFinderComponent, SingleMealComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
