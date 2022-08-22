import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealFinderComponent } from './meal-finder/meal-finder.component';
import { SingleMealComponent } from './single-meal/single-meal.component';

const routes: Routes = [
  { path: '', component: MealFinderComponent },
  { path: 'meal/:id', component: SingleMealComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
