import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class ToolbarModel {

  //============ Data ============================
  public searchValue: string;
  public placeholder: string = "Search by vedio title";
  public hasSearch: boolean = true;

  // ===================== Events ==================
  public onSearch: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  // Search
  public search(value: string) {
    this.searchValue = value;
    this.onSearch.emit(this.searchValue);
  }

}
