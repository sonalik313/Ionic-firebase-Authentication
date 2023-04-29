import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'property',

    children:[
      {
        path: '',
    loadChildren: () =>
    import('./pages/property/property.module').then( m => m.PropertyPageModule)
  },
   {
    path: ':property_id',
    loadChildren: () =>
     import('./property/property-details/property-details.module').then( m => m.PropertyDetailsPageModule)
  },
 ]
},

  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
