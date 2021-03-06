import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { ErrorComponent } from './views/error/error.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AuthGuard } from './core/auth.guard';
import { RouteWizardComponent } from './views/route-wizard/route-wizard.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'route-wizard', component: RouteWizardComponent, canActivate: [AuthGuard]},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
