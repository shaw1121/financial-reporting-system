import { HomeComponent } from './components/content/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './components/content/user-list/user-list.component';
import { InfoListComponent } from './components/content/info-list/info-list.component';
import { InvestManagementComponent } from './components/content/invest-management/invest-management.component';
import { FundsDataComponent } from './components/content/funds-data/funds-data.component';
import { FundsManagementComponent } from './components/content/funds-management/funds-management.component';

const routes: Routes = [
  {
    path: 'index',
    component: HomeComponent,
  },
  {
    path: 'userList',
    component: UserListComponent,
  },
  {
    path: 'infoList',
    component: InfoListComponent,
  },
  {
    path: 'fundsManegement',
    component: FundsManagementComponent
  },
  {
    path: 'investManagement',
    component: InvestManagementComponent,
  },
  {
    path: 'fundsData',
    component: FundsDataComponent
  },
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
