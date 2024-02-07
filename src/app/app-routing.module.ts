import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { NoAuthGuard } from './auth/no-auth.guard';
import { RegisterComponent } from './auth/register/register.component';
import { AboutUsComponent } from './AboutUs/about.component';
import { HomeComponent } from './home/home.component';
import { CarComponent } from './car/car.component';
import { RobotArmComponent } from './robot-arm/robot-arm.component';
import { SmartHomeComponent } from './smart-home/smart-home.component';
import { GamesComponent } from './games/games.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminGuard } from './auth/admin.guard';
import { OwnerGuard } from './auth/owner.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [NoAuthGuard],
  },
  { path: 'login', component: LoginComponent, canActivate: [NoAuthGuard] },

  {
    path: 'car',
    component: CarComponent,
    canActivate: [AuthGuard, OwnerGuard],
  },
  {
    path: 'robot-arm',
    component: RobotArmComponent,
    canActivate: [AuthGuard, OwnerGuard],
  },
  {
    path: 'smart-home',
    component: SmartHomeComponent,
    canActivate: [AuthGuard, OwnerGuard],
  },
  {
    path: 'games',
    component: GamesComponent,
    canActivate: [AuthGuard, OwnerGuard],
  },

  { path: 'aboutUs', component: AboutUsComponent, canActivate: [AuthGuard] },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AdminGuard],
  },

  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
