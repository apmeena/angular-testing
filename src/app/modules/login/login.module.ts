import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../angular-material/material.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forChild([{
        path: '', component: LoginComponent
    }]),
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: []
})
export class LoginModule { }
