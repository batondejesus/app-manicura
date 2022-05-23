import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabnav/tabnav.module').then( m => m.TabnavPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login-screen/login-screen.module').then( m => m.LoginScreenPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register-screen/register-screen.module').then( m => m.RegisterScreenPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
