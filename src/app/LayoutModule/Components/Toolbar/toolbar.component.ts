import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToolbarModel } from './toolbarModel';

@Component({
  selector: 'toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.scss'],
  providers:[ToolbarModel]
})

export class ToolbarComponent {

  @Input() public set hasSearch(flag: boolean) {
    this.model.hasSearch = flag;
  }

  @Output() public onSearch: EventEmitter<string> = new EventEmitter<string>();

  constructor(public model: ToolbarModel) {
    this.model.onSearch.subscribe( value => this.onSearch.emit(value));
  }

}
