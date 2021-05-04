import { PageInfo } from "src/app/SharedModule/Models/pageResult";
import { IThumbnail } from "../VedioList/snippet";

export interface IVedioInfo {
  etag: string;
  kind: string;
  pageInfo: PageInfo;
  items: Array<IVedioDetails>;
}

export interface IVedioDetails {
  etag: string;
  kind: string;
  id: string;
  statistics: IStatistics;
  contentDetails: IContentDetails;
  snippet: ISnippet;
}

export interface IStatistics {
  commentCount: number;
  dislikeCount: number;
  favoriteCount: number
  likeCount: number;
  viewCount: number;
}

export interface IContentDetails {
  caption: boolean;
  definition: string;
  dimension: string;
  duration: string;
  licensedContent: boolean;
  projection: string;
  contentRating: {};
}

export interface ISnippet {
  categoryId: string;
  channelId: string;
  channelTitle: string;
  defaultAudioLanguage: string;
  description: string;
  liveBroadcastContent: string;
  publishedAt: string;
  tags: Array<string>;
  thumbnails: IThumbnail;
  title: string;
}
