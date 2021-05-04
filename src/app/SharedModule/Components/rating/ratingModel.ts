import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class RatingModel {

  //=========================Data=====================
  public rating: number = 3;
  public starCount: number = 5;
  public stars: Array<number> = new Array<number>();

  //=========================Events=====================
  public onClick: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    this.loadRating();
  }

  // Load Rating
  public loadRating() {
    for (let index = 0; index < this.starCount; index++) {
      this.stars.push(index);
    }
  }

  public click(rating: number) {
   // this.onClick.emit(rating);
    this.rating = rating;
  }

}
