import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {

    path: '', component: MainComponent, children: [

      // {
      //   path: 'products',
      //   loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
      // },
    ]    
  },
];
    
export const MainRoutes = RouterModule.forChild(routes);
