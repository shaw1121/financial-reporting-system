import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import * as $ from 'jquery';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SiderComponent } from './components/sider/sider.component';
import { ContentComponent } from './components/content/content.component';
import { FundsManagementComponent } from './components/content/funds-management/funds-management.component';
import { FundsDataComponent } from './components/content/funds-data/funds-data.component';
import { HomeComponent } from './components/content/home/home.component';
import { InfoListComponent } from './components/content/info-list/info-list.component';
import { InvestManagementComponent } from './components/content/invest-management/invest-management.component';
import { UserListComponent } from './components/content/user-list/user-list.component';
import { BreadCrumbComponent } from './components/content/bread-crumb/bread-crumb.component';
import { CardComponent } from './components/content/user-list/card/card.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SiderComponent,
    CardComponent,
    ContentComponent,
    FundsManagementComponent,
    FundsDataComponent,
    HomeComponent,
    InfoListComponent,
    InvestManagementComponent,
    UserListComponent,
    BreadCrumbComponent,
    LoginComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
