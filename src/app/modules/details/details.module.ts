import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../angular-material/material.module';
import { UserDetailsComponent } from './components/user-details.component';


@NgModule({
  declarations: [
    UserDetailsComponent
  ],
  imports: [
    RouterModule.forChild([{
        path: '', component: UserDetailsComponent
    }]),
    CommonModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: []
})
export class DetailsModule { }
