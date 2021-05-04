import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './Components/Layout/layout.component';

const layoutRoutes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children: [
      {
        path: 'vedios',
        loadChildren: () => import('../Admin/Vedios/vedios.module').then(mod => mod.VediosModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(layoutRoutes)
  ],
  exports: [RouterModule]
})

export class LayoutRoutingModule {}
