import { RecipeLayoutComponent } from './../components/recipe-layout/recipe-layout.component';
import { RecipeComponent } from './../components/recipe/recipe.component';
import { HomeComponent } from './../components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../components/admin/admin.component';
import { LoginComponent } from '../components/login/login.component';
import { AuthGuard } from '../_helpers/auth.guard';
import { Role } from '../_models/role';
import { AddEditReceipeComponent } from '../components/recipe-layout/add-edit-receipe/add-edit-receipe.component';

const routes: Routes = [

{
  path: 'dashboard',
  component: HomeComponent,
  canActivate: [AuthGuard]
},
{
  path: 'recipe', component:RecipeLayoutComponent ,
  canActivate: [AuthGuard]
},
{ path: 'recipe/edit/:id', component: AddEditReceipeComponent ,
  canActivate: [AuthGuard]
},
{ path: 'recipe/add', component: AddEditReceipeComponent,
canActivate: [AuthGuard]
},
{
  path: 'new_recipe',
  component: RecipeComponent,
  canActivate: [AuthGuard]
},
{
  path: 'admin',
  component: AdminComponent,
  canActivate: [AuthGuard],
  data: { roles: [Role.Admin] }
},
{
  path: 'login',
  component: LoginComponent
},

// otherwise redirect to home
{ path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
