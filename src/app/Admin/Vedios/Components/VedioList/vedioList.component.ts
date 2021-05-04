import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { VedioListModel } from './vedioListModel';

@Component({
  selector: 'vedio-list',
  templateUrl: './vedioList.component.html',
  styleUrls: ['./vedioList.component.scss'],
  providers: [VedioListModel]
})

export class VedioListComponent {

  //====== Inputs , Outputs , Children =========
  @ViewChild("vedioPager", {static: false}) pager: MatPaginator;

  constructor(public model: VedioListModel) { }

}
