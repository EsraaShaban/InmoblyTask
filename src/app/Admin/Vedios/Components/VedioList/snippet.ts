export class Snippet {
  public channelId: string;
  public channelTitle: string;
  public description: string;
  public liveBroadcastContent: string;
  public publishTime: string;
  public publishedAt: string;
  public title: string;
  public thumbnails: IThumbnail;
}

export interface IThumbnail {
  default: IThumbnailInfo;
  high: IThumbnailInfo;
  medium: IThumbnailInfo;
  maxres: IThumbnailInfo;
}

export interface IThumbnailInfo {
  url: string;
  width: number;
  height: number;
}
