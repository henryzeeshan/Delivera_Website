import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'main',
    loadChildren:()=>import('./main/main.module').then(m=>m.MainModule)
  },
  
  {
    path:'contact',
    loadChildren:()=>import('./contact/contact.module').then(m=>m.contactModule)
  },
  {
    path:'about-us',
    loadChildren:()=>import('./about/about.module').then(m=>m.aboutModule)
  },
  {
    path:'services',
    loadChildren:()=>import('./services/services.module').then(m=>m.servicesModule)
  },

  {
    path:'', 
    redirectTo:'main',
    pathMatch:'full'  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
