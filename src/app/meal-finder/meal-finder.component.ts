import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meal-finder',
  templateUrl: './meal-finder.component.html',
  styleUrls: ['./meal-finder.component.css'],
})
export class MealFinderComponent implements OnInit {
  @ViewChild('searchInput') searchInput;
  constructor(private http: HttpClient, private router: Router) {}
  resultHeading: string;
  foundInput = true;
  meal;
  mealImg: string;
  @Output() mealId = new EventEmitter<any>();
  mealTitle: string;
  meals = [];
  ingredients = [];
  randomSelectOption = false;
  ngOnInit(): void {}

  onSearchMeal() {
    this.meal = '';
    this.meals = [];
    let searchInputValue = this.searchInput.nativeElement.value;
    this.resultHeading = searchInputValue;
    this.http
      .get<any>(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputValue}`
      )
      .pipe(
        map((response) => {
          console.log(response?.meals);
          return response.meals;
        }),
        map((meals) => {
          if (meals) {
            for (const meal of meals) {
              this.meals.push({
                mealImg: meal.strMealThumb,
                mealTitle: meal.strMeal,
                mealId: meal.idMeal,
              });
              console.log(this.meals);
            }
          }
          return meals;
        })
      )
      .subscribe((meals) => {
        if (meals === null) {
          this.foundInput = false;
        } else {
          this.foundInput = true;
          this.randomSelectOption = false;
        }
        this.searchInput.nativeElement.value = null;
      });
  }

  onGetMealDetails(mealId) {
    this.mealId.emit(mealId);
    this.http
      .get<any>(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      )
      .pipe(map((response) => response.meals))
      .subscribe((meals) => {
        const meal = meals[0];

        this.addMeal(meal);
        console.log(meal);
      });
  }

  addMeal(meal) {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push(
          `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
        );
      } else {
        break;
      }
    }
    this.meal = meal;
    this.ingredients = ingredients;
  }

  onGetRandomMeal() {
    this.randomSelectOption = true;
    this.meals = [];
    this.http
      .get<any>('https://www.themealdb.com/api/json/v1/1/random.php')
      .subscribe((response) => {
        const meal = response.meals[0];
        this.addMeal(meal);
      });
  }
}
