import { Snippet } from "./snippet";

export class VedioItem {
  public etag: string;
  public kind: string;
  public snippet: Snippet;
  public id: ItemId;
}

export interface ItemId {
  kind: string;
  videoId: string;
}
