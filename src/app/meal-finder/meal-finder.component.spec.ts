import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealFinderComponent } from './meal-finder.component';

describe('MealFinderComponent', () => {
  let component: MealFinderComponent;
  let fixture: ComponentFixture<MealFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealFinderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
