import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LayoutComponent } from "src/app/LayoutModule/Components/Layout/layout.component";
import { APICallerService } from "src/app/SharedModule/Services/apiCaller.service";
import { IThumbnail, IThumbnailInfo } from "../VedioList/snippet";
import { IContentDetails, ISnippet, IStatistics, IVedioDetails } from "./vedioInfo";

@Injectable()
export class VedioDetailsModel {

  //========================Data==================
  public data:  IVedioDetails = {} as IVedioDetails;
  public id: string;
  public isFavorite: boolean = false;
  public favoriteVedios: Array<IVedioDetails> = new Array<IVedioDetails>();

  constructor(private layout: LayoutComponent, private apiCaller: APICallerService, private route: ActivatedRoute) {

    this.initVedioObjects();

    this.route.url.subscribe(url => {
      if (url.find(obj => obj.path == "details"))
        this.layout.hasSearch = false;
      else
        this.layout.hasSearch = true;
    })

    this.route.params.subscribe(params => {
      this.id = params["id"];
    })
    if(this.id)
      this.getVedioDetails();

  }

  // Initalize Vedio Objects
  public initVedioObjects() {
    this.data.snippet = {} as ISnippet;
    this.data.snippet.thumbnails = {} as IThumbnail;
    this.data.snippet.thumbnails.maxres = {} as IThumbnailInfo;
    this.data.contentDetails = {} as IContentDetails;
    this.data.statistics = {} as IStatistics;
  }

  // Get Image
  public get Image() {
    return this.data.snippet.thumbnails.maxres.url;
  }

  // Get Vedio Details
  public getVedioDetails() {
    this.apiCaller.getVedioDetails(this.id).subscribe(res => {
      let result: any = res;
      this.data = result.items[0];
    })
  }

  // Convert duration to time
  public convertDurationToTime(duration: string) {

    let reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
    let hours: number = 0;
    let minutes: number = 0;
    let seconds: number = 0;

    if(reptms.test(duration)) {
      let matches = reptms.exec(duration);
      if (matches[1]) hours = Number(matches[1]);
      if (matches[2]) minutes = Number(matches[2]);
      if (matches[3]) seconds = Number(matches[3]);
    }
    return hours + ":" + minutes + ":" + seconds;
  }

  // Get Duration
  public getDuration() {
    return this.convertDurationToTime(this.data.contentDetails.duration);
  }

  // Get Favorite Text
  public get FavoriteText() {
    return this.isFavorite ? "Remove from favorite" : "Add to favorite";
  }

  // Set Favourite
  public setFavourite() {
    if(this.isFavorite) {
      this.isFavorite = false;
      let indx = this.favoriteVedios.findIndex(obj => obj.id == this.data.id);
      this.favoriteVedios.splice(indx, 1);
    }
    else {
      this.isFavorite = true;
      this.favoriteVedios.push(this.data);
    }

    this.apiCaller.setCachedFavoriteVedios(this.favoriteVedios);

  }

}
