import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RecipeComponent } from './recipe/recipe.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { ReceipeFormComponent } from './recipe/receipe-form/receipe-form.component';
import { RecipeLayoutComponent } from './recipe-layout/recipe-layout.component';
import { AddEditReceipeComponent } from './recipe-layout/add-edit-receipe/add-edit-receipe.component';

const commonComponents = [ 
  FooterComponent,
  NavbarComponent,
  SidebarComponent,

]

@NgModule({
  declarations: [
   ...commonComponents,
   LoginComponent,
   AdminComponent,
   HomeComponent,
   RecipeComponent,
   DialogBoxComponent,
   ReceipeFormComponent,
 
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTableModule
  ],
  exports: [
    ...commonComponents
  ]
})
export class ComponentsModule { }
