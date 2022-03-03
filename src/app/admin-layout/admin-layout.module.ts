import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RecipeLayoutComponent } from '../components/recipe-layout/recipe-layout.component';
import { AddEditReceipeComponent } from '../components/recipe-layout/add-edit-receipe/add-edit-receipe.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    RecipeLayoutComponent,
    AddEditReceipeComponent,
  ],
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    AdminLayoutRoutingModule,MatButtonModule,MatInputModule,MatRippleModule,MatFormFieldModule,MatTooltipModule,MatSelectModule
  ]
})
export class AdminLayoutModule { }
