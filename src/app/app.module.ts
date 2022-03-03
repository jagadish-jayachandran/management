import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
// Import the functions you need from the SDKs you need
// import { }
import { initializeApp } from "firebase/app";
import { AlertComponent } from './_components/alert/alert.component';
import { environment } from 'src/environments/environment';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// Initialize Firebase
export const app:any = initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
