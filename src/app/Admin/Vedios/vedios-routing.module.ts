import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VedioDetailsComponent } from "./Components/VedioDetails/vedioDetails.component";
import { VediosComponent } from "./Pages/Vedios/vedios.component";

const vediosRoutes: Routes = [
  { path: '', component: VediosComponent },
  { path: 'vedios', component: VediosComponent },
  { path: 'details/:id', component: VedioDetailsComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(vediosRoutes)
  ],
  exports:[RouterModule]
})

export class VediosRoutingModule { }
