import { PageInfo } from "src/app/SharedModule/Models/pageResult";
import { VedioItem } from "./vedioItem";

export class Playlist {

  public etag: string;
  public kind: string;
  public nextPageToken: string;
  public regionCode: string;
  public pageInfo: PageInfo;
  public items: Array<VedioItem>;

  constructor() {
    this.items = new Array<VedioItem>();
  }

}
