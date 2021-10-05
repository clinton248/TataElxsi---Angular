import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnectionService } from './services/connection.service';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './dashboard-content/home/home.component';
import { EditProfileComponent } from './dashboard-content/edit-profile/edit-profile.component';
import { FeedbackComponent } from './dashboard-content/feedback/feedback.component';
import { MessagesComponent } from './dashboard-content/messages/messages.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    HomeComponent,
    EditProfileComponent,
    FeedbackComponent,
    MessagesComponent,
    ChangePasswordComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
