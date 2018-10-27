import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { RouteModule } from './route/route.module';
import { LoginComponent } from './views/login/login.component';
import { ErrorComponent } from './views/error/error.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { RouteListComponent } from './views/route-list/route-list.component';
import { RouteComponent } from './views/route/route.component';
import { RouteWizardComponent } from './views/route-wizard/route-wizard.component';
import { OverallStateComponent } from './views/route-wizard/overall-state/overall-state.component';
import { RouteGradeComponent } from './views/route-wizard/route-grade/route-grade.component';
import { BelayModeComponent } from './views/route-wizard/belay-mode/belay-mode.component';
import { TagsComponent } from './views/route-wizard/tags/tags.component';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    DashboardComponent,
    RouteListComponent,
    RouteComponent,
    RouteWizardComponent,
    OverallStateComponent,
    RouteGradeComponent,
    BelayModeComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'climbing-log'),
    CoreModule,
    RouteModule,
    BrowserAnimationsModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
