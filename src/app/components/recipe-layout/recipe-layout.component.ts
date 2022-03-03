import { RecipeService } from './../../_services/recipe.service';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-recipe-layout',
  templateUrl: './recipe-layout.component.html',
  styleUrls: ['./recipe-layout.component.scss']
})
export class RecipeLayoutComponent implements OnInit {

  recipeData: any[]= [];

  constructor(private recipeService: RecipeService) {}
  ngOnInit(): void {

      this.recipeService.getAll()
          .pipe(first())
          .subscribe(users =>{
            this.recipeData = users;
            localStorage.setItem('recipe',JSON.stringify(this.recipeData));
          }
             );
  }

  deleteUser(id: string) {
      const user = this.recipeData.find(x => x.name === id);
      user.isDeleting = true;

      this.recipeService.delete(id);
      location.reload()
      this.recipeData = this.recipeData.filter(x => x.id !== id)
          // .pipe(first())
          // .subscribe(() => this.recipeData = this.recipeData.filter(x => x.id !== id));
  }
}
