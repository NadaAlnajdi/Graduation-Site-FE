import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgwWowModule } from 'ngx-wow';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from "../environments/environment";
import { FirebaseOptions } from '@firebase/app-types';

import { Db1Module } from './db1.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './AboutUs/about.component';
import { CarComponent } from './car/car.component';
import { GamesComponent } from './games/games.component';
import { SmartHomeComponent } from './smart-home/smart-home.component';
import { RobotArmComponent } from './robot-arm/robot-arm.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScrollToTopButtonComponent } from './scroll-to-top-button/scroll-to-top-button.component';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    AboutUsComponent,
    CarComponent,
    GamesComponent,
    SmartHomeComponent,
    RobotArmComponent,
    FooterComponent,
    DashboardComponent,
    ScrollToTopButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    BrowserAnimationsModule,
    NgwWowModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig as FirebaseOptions),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    Db1Module,
    CommonModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
