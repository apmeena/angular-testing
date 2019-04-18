import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserListComponent } from './components/user-list/user-list.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../angular-material/material.module';
import { FormsModule } from '@angular/forms';
import { HighlightPipe } from '../../pipes/highlight-text.pipe';
import { FilterPipe } from '../../pipes/filter.pipe';


@NgModule({
  declarations: [
    UserListComponent,
    HighlightPipe,
    FilterPipe
  ],
  imports: [
    FormsModule,
    RouterModule.forChild([{
        path: '', component: UserListComponent
    }]),
    CommonModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: []
})
export class UsersModule { }
