import { HomeComponent } from './components/content/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './components/content/user-list/user-list.component';
import { InfoListComponent } from './components/content/info-list/info-list.component';
import { InvestManagementComponent } from './components/content/invest-management/invest-management.component';
import { FundsDataComponent } from './components/content/funds-data/funds-data.component';
import { FundsManagementComponent } from './components/content/funds-management/funds-management.component';
import { LoginComponent } from './components/login/login.component';

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
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'infoList',
    component: InfoListComponent,
  },
  {
    path: 'fundsManagement',
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
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
