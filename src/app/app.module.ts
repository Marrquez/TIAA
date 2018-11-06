import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

/**
 * custom components
 * */
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewEditComponent } from './components/new-edit/new-edit.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

/**
 * services
 * */
import { EmployeeStoreService } from './services/employee-store.service';
import { CountryStoreService } from './services/country-store.service';

/**
 * pipes
 * */
import { CalculateAgePipe } from './pipes/calculate-age.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';

/**
 * customs and externals components
 * */
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffects } from './employee.effects';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { ConfirmDialogComponent } from './components/search-results/search-results.component';
import { JobTitleComponent } from './components/job-title/job-title.component';
import { AreaComponent } from './components/area/area.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewEditComponent,
    SearchBarComponent,
    SearchResultsComponent,
    JobTitleComponent,
    AreaComponent,
    CalculateAgePipe,
    FilterPipe,
    OrderByPipe,
    ConfirmDialogComponent
  ],
  entryComponents: [
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    HttpModule,
    EffectsModule.forRoot([EmployeeEffects]),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [
    EmployeeStoreService,
    CountryStoreService,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    MatDatepickerModule,
    MatDialogModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
