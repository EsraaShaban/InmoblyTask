import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { LocalStorageService } from "angular-web-storage";

@Injectable()
export class APICallerService {

  //===================== Data==================
  public domainName = "https://www.googleapis.com/youtube/v3/";
  public apiKey : string = "AIzaSyAm0_Sl6zCy-Fw8ZGIfF3NvyUkjyuYKs4E";
  public detailsKey: string;

  constructor(private http: HttpClient, private localStorage: LocalStorageService) { }

  // Set Cashed Vedios
  public setCachedVedios(vedios) {
    this.localStorage.set("Vedios_" , vedios);
  }

  // Get Cashed Vedios
  public getCashedVedios() {
    return this.localStorage.get("Vedios_");
  }

  // Set Cashed Favorite Vedios
  public setCachedFavoriteVedios(favoriteVedios) {
    this.localStorage.set("favorite_Vedios" , favoriteVedios);
  }

  // Get Cashed Favorite Vedios
  public getCashedFavoriteVedios() {
    return this.localStorage.get("favorite_Vedios");
  }

  // Get Vedios
  public getVedios(channel: string ="UCMBrp9dIBDxGO7rTd0LkxYg", maxResults = 5) {
    let url = this.domainName + "search?key=" + this.apiKey + '&channelId=' + channel + '&order=relevance&part=snippet &type=video,id&maxResults=' + maxResults;
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }

  // Get Page Vedios
  public getPageVedios(pageToken: string, channel: string ="UCMBrp9dIBDxGO7rTd0LkxYg") {
    let url = this.domainName + "search?pageToken=" + pageToken + '&channelId=' + channel +'&part=snippet' + '&order=relevance&part=snippet &type=video,id'+ "&key=" + this.apiKey;
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }

  // Search in Vedios
  public searchInVedios(text: string, channel: string ="UCMBrp9dIBDxGO7rTd0LkxYg") {
    let url = this.domainName + "search?key=" + this.apiKey + '&channelId=' + channel + '&q=' + text + '&order=relevance&part=snippet &type=video,id';
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }

  // Get Vedio Details
  public getVedioDetails(vedioId: string) {
    let url = this.domainName + "videos?part=snippet,contentDetails,statistics&id=" + vedioId + '&key=' + this.apiKey;
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }

}
