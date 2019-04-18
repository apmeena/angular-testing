import {MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
      MatButtonModule,
      MatCardModule,
      MatToolbarModule,
      MatIconModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatSnackBarModule],
  exports: [
      MatButtonModule,
      MatCardModule,
      MatToolbarModule,
      MatIconModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatSnackBarModule]
})
export class MaterialModule { }