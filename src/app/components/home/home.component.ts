import { RecipeService } from './../../_services/recipe.service';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recipeData: any = [];
  leng: any;

  constructor() { }

  ngOnInit(): void {
    this.recipeData = (localStorage.getItem('recipe'));
   this.leng = Object.keys(JSON.parse(this.recipeData)).length
    // this.recipeService.getAll()
    // .pipe(first())
    // .subscribe(rec =>{

    //   this.recipeData = rec

    //   this.leng = this.recipeData.length();
    // } );
  }

}
