import { AfterViewInit, Component } from '@angular/core';
import { VedioDetailsModel } from './vedioDetailsModel';

@Component({
  selector: 'vedio-details',
  templateUrl: './vedioDetails.component.html',
  styleUrls: ['./vedioDetails.component.scss'],
  providers: [VedioDetailsModel]
})

export class VedioDetailsComponent implements AfterViewInit {

  constructor(public model: VedioDetailsModel) { }

  ngAfterViewInit(): void {
    history.pushState(null, null, location.href);
    window.onpopstate = ()=> {
      if(history.back)
        location.href ="/vedios";
    };
  }

}
