import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "src/app/AngularMaterialModule/AngularMaterialModule";
import { VediosRoutingModule } from "./vedios-routing.module";
import { VediosComponent } from "./Pages/Vedios/vedios.component";
import { VedioListComponent } from "./Components/VedioList/vedioList.component";
import { VedioDetailsComponent } from "./Components/VedioDetails/vedioDetails.component";
import { SharedModule } from "src/app/SharedModule/shared.module";

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    SharedModule,
    VediosRoutingModule
  ],
  declarations: [
    VediosComponent,
    VedioListComponent,
    VedioDetailsComponent
  ],
  exports: [],
  providers: []
})

export class VediosModule { }
