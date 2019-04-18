import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserResolver } from './services/user-details-route-resolver';
import { CanActivateRouteGuard } from './services/can-activate-route.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './modules/login/login.module#LoginModule' },
  { path: 'users', loadChildren: './modules/users/users.module#UsersModule', canActivate: [CanActivateRouteGuard] },
  { path: 'users/:id', 
    resolve: { userData: UserResolver },
    loadChildren: './modules/details/details.module#DetailsModule', canActivate: [CanActivateRouteGuard] },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
