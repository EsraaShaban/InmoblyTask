export class PageResult<T> {

  //======Constructor===========================
  constructor() {
    this.items = new Array<T>();
  }

  //======Public Members========================
  public items: Array<T>;
  public totalResults: number;
  public pageInfo: PageInfo;
  public nextPageToken: string;
  public prevPageToken: string;

  public addFirst(item:T){
    this.items.push(item);
  }
  public addLast(item:T){
    this.items.unshift(item);
  }

}

export class PagingModel {
  public PageIndex: number = 1;
  public PageSize: number = 5;
}

export class PageInfo {
  public totalResults: number;
  public resultsPerPage: number;
}
