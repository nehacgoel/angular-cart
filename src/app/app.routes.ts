import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./product/product.routes').then((m) => m.productRoutes),
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
];
