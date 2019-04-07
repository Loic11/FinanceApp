import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateExpanseComponent } from './create-expanse/create-expanse.component';
import { CreateTransferComponent } from './create-transfer/create-transfer.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'create-expanse',
    component: CreateExpanseComponent
  },
  {
    path: 'create-transfer',
    component: CreateTransferComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
