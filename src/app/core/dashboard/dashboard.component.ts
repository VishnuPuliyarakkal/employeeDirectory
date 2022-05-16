import { AppService } from 'src/app/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
employees: any = [];
search: any;
  constructor(public _service: AppService) { }

  ngOnInit(): void {

    this._service.getEmployees().subscribe((res) => {
      this._service.totalCount.next(res.length)
      this.employees = res;
    })
  }

}
