import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { MatTableDataSource } from '@angular/material/table';
import { APICallerService } from "src/app/SharedModule/Services/apiCaller.service";
import { PageResult } from "src/app/SharedModule/Models/pageResult";
import { VedioItem } from "./vedioItem";
import { Sort } from "@angular/material/sort";
import { BehaviorSubject } from "rxjs";
import { LayoutComponent } from "src/app/LayoutModule/Components/Layout/layout.component";

@Injectable()
export class VedioListModel {

  //=========================Data======================
  public displayedColumns: string[] = ['image', 'title', 'date', 'actions'];
  public vedios: MatTableDataSource<VedioItem> = new MatTableDataSource<VedioItem>();
  public pageSize: number = 5;
  public pageIndex: number = 0;
  public pageSizeList = [5, 10, 20, 50, 100];
  public records: number;
  public _vedios = new PageResult<VedioItem>();
  public searchedVedios = new PageResult<VedioItem>();
  public dataSubject = new BehaviorSubject<VedioItem[]>([]);
  public nextPageToken: string;
  public prevPageToken: string;
  public showPager: boolean = true;

  constructor(private layoutComp: LayoutComponent, private apiCaller: APICallerService, private router: Router) {
    // let temp = this.apiCaller.getCashedVedios();
    // if(!temp)
        this.getVedios();
    // else {
    //   this._vedios = this.apiCaller.getCashedVedios();
    //   this.vedios.data = this._vedios.items;
    //   this.records = this._vedios.totalResults;
    // }
    this.layoutComp.onSearch.subscribe(res => {
      this.searchInVedios(res);
    })
  }

  // Has Items
  public get HasItems() {
    return this.vedios.data.length > 0;
  }

  // Get Vedios
  public getVedios() {
    this.apiCaller.getVedios().subscribe(res => {
      let result: any = res;
      this._vedios.totalResults = result.pageInfo.totalResults;
      this._vedios.nextPageToken = result.nextPageToken;
      let indx = this.pageSize * (this.pageIndex + 1);
      for (let vedio of result.items) {
        indx++;
        let temp: VedioItem = new VedioItem();
        temp.etag = vedio.etag;
        temp.kind = vedio.kind;
        temp.snippet = vedio.snippet;
        temp.id = vedio.id;
        this._vedios.addFirst(temp);
      }

      this.apiCaller.setCachedVedios(this._vedios);
      this.vedios.data = this._vedios.items;
      this.nextPageToken = this._vedios.nextPageToken;
      this.records = this._vedios.totalResults;
    })
  }

  // Get Next Page Vedios
  public getNextPageVedios() {

    this.apiCaller.getPageVedios(this.nextPageToken).subscribe(res=> {
      let result: any = res;
      this.nextPageToken= result.nextPageToken;
      this.prevPageToken = result.prevPageToken;

      this._vedios = new PageResult<VedioItem>();
      for (let vedio of result.items) {
        let temp: VedioItem = new VedioItem();
        temp.etag = vedio.etag;
        temp.kind = vedio.kind;
        temp.snippet = vedio.snippet;
        temp.id = vedio.id;
        this._vedios.addFirst(temp);
      }

      this.apiCaller.setCachedVedios(this._vedios);
      this.vedios.data = this._vedios.items;
    })
  }

  // Get Prev Page Vedios
  public getPrevPageVedios() {
    this.apiCaller.getPageVedios(this.prevPageToken).subscribe(res=> {
      let result: any = res;
      this.prevPageToken = result.prevPageToken;
      this.nextPageToken = result.nextPageToken;

      this._vedios = new PageResult<VedioItem>();
      for (let vedio of result.items) {
        let temp: VedioItem = new VedioItem();
        temp.etag = vedio.etag;
        temp.kind = vedio.kind;
        temp.snippet = vedio.snippet;
        temp.id = vedio.id;
        this._vedios.addFirst(temp);
      }

      this.apiCaller.setCachedVedios(this._vedios);
      this.vedios.data = this._vedios.items;
    })
  }

  // on Paging
  public page(event) {
    if(event.pageIndex > event.previousPageIndex) {
      // Clicked on next button
      this.getNextPageVedios();
    } else {
      // Clicked on previous button
      this.getPrevPageVedios();
    }
  }

  //  search In Vedios
  public searchInVedios(text: string) {
    this.apiCaller.searchInVedios(text).subscribe(res => {
      let result: any = res;
      for (let vedio of result.items) {
        let temp: VedioItem = new VedioItem();
        temp.etag = vedio.etag;
        temp.kind = vedio.kind;
        temp.snippet = vedio.snippet;
        temp.id = vedio.id;
        if(temp.snippet.title.toLowerCase().includes(text.toLowerCase()))
          this.searchedVedios.addFirst(temp);
      }
      this.vedios.data = this.searchedVedios.items;
      this.showPager = false;
    })
  }

  // To Details
  public toDetails(item: VedioItem) {
    this.router.navigate(["/vedios/details", item.id.videoId]);
  }

  // Sort Table Data
  public sortData(sort: Sort) {
    let data = this.vedios.data.slice();
    if (!sort.active || sort.direction === '') {
      this.vedios.data = data;
      return;
    }
    this.vedios.data = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'title': return this.compare(a.snippet.title, b.snippet.title, isAsc);
        case 'date': return this.compare(a.snippet.publishedAt, b.snippet.publishedAt, isAsc);
        default: return 0;
      }
    });
    this.dataSubject.next(data);
  }

  private compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}
