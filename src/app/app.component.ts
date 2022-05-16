import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'EmployeeDashboard';
  constructor(private _service: AppService, private router: Router, private titleService: Title,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route: any) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
    ).pipe(
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data),

    ).subscribe((event: any) => this.titleService.setTitle(event['title']));
  }
}
