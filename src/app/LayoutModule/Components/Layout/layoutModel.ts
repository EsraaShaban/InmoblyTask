import { EventEmitter, Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class LayoutModel {

  public hasSearch: boolean = true;
  public onSearch: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router) {
    this.router.navigate(["/vedios"]);
  }

  // Search
  public search(value: string) {
    this.onSearch.emit(value);
  }

}
