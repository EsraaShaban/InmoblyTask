import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../AngularMaterialModule/AngularMaterialModule";
import { APICallerService } from "./Services/apiCaller.service";
import { RatingComponent } from './Components/rating/rating.component';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  declarations: [RatingComponent],
  exports: [RatingComponent],
  providers: [APICallerService]
})

export class SharedModule { }
