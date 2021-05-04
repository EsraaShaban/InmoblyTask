import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RatingModel } from './ratingModel';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  providers: [RatingModel]
})

export class RatingComponent {

  @Input() public rating(value: number) {
    this.model.rating = value;
  }
  @Input() public starCount(value: number) {
    this.model.starCount = value;
  }
  @Output() public onClick: EventEmitter<number> = new EventEmitter<number>();

  constructor(public model: RatingModel) {
    this.model.onClick.subscribe( value => this.onClick.emit(value) );
  }

}
