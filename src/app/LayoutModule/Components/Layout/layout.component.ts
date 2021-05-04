import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LayoutModel } from './layoutModel';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [LayoutModel]
})

export class LayoutComponent {

  @Input() public set hasSearch(flag: boolean) {
    this.model.hasSearch = flag;
  }
  @Output() public onSearch: EventEmitter<string> = new EventEmitter<string>();

  constructor(public model: LayoutModel) {
    this.model.onSearch.subscribe((data) => this.onSearch.emit(data));
  }

}
