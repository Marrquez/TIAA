import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

/**
 * custom components
 * */
import { BaseComponent } from './components/base/base.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewEditComponent } from './components/new-edit/new-edit.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

/**
 * services
 * */
import { EmployeeStoreService } from './services/employee-store.service';

/**
 * external components
 * */
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { ResultsCountComponent } from './components/count/results-count.component';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffects } from './employee.effects';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    DashboardComponent,
    NewEditComponent,
    ResultsCountComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    HttpModule,
    EffectsModule.forRoot([EmployeeEffects])
  ],
  providers: [
    EmployeeStoreService,
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
