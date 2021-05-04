import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../AngularMaterialModule/AngularMaterialModule";
import { LayoutComponent } from "./Components/Layout/layout.component";
import { ToolbarComponent } from "./Components/Toolbar/toolbar.component";
import { LayoutRoutingModule } from "./layout-routing.module";

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    LayoutRoutingModule
  ],
  declarations: [LayoutComponent, ToolbarComponent],
  exports: [LayoutComponent, ToolbarComponent],
  providers: []
})

export class LayoutModule { }
