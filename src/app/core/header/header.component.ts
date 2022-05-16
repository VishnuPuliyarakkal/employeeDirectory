import { Component, OnInit, OnChanges } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  page: string = '';
  totalCount: any
  activatedRoute: any;
  constructor(private _service: AppService, private titleService: Title, private _router: Router) { }

  ngOnInit(): void {
    this._router.events.subscribe((event: any) => {
      this.page = this.titleService.getTitle();
    })
    this.page = this.titleService.getTitle();
    console.log(this.page)
    this._service.totalCount.subscribe((count) => {
      this.totalCount = count
    })
  }

  ngOnChanges(): void {

  }

  logOut() {
    localStorage.clear();
    this._router.navigate(['login'])
  }

}
