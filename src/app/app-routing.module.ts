import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * custom components
 * */
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewEditComponent } from './components/new-edit/new-edit.component';

const routes: Routes = [
  {
    path: 'new-edit',
    component: NewEditComponent
  },
  {
    path: '**',
    component: DashboardComponent
  },
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
