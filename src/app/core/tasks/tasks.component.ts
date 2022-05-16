import { AppService } from 'src/app/app.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  userId!: number;
  tasks: any = [];
  title: string = '';
  filteredTasks: any = [];
  status: any = '';
  constructor(private actRoute: ActivatedRoute, private _service: AppService) { }

  ngOnInit(): void {
    this.userId = this.actRoute.snapshot.params['id'];
    this._service.getEmployeeTasks(this.userId).subscribe((tasks) => {
      this._service.totalCount.next(tasks.length)
      this.tasks = tasks;
      this.filteredTasks = tasks
    })
  }
  addNewTask() {
    const newTask = {
      userId: this.userId,
      id: null,
      title: this.title,
      completed: false
    }
    this.tasks.push(newTask);
    this.filteredTasks = this.tasks;
    this._service.totalCount.next(this.tasks.length)
    this.title = '';
    this.status = '';
  }

  statusSelection(e: any) {
    console.log(e)
    if (e == 'completed') {
      this.filteredTasks = this.tasks.filter(
        (tasks: any) =>
          tasks.completed
      )
    } else if (e == 'notcompleted') {
      this.filteredTasks = this.tasks.filter(
        (tasks: any) =>
          !tasks.completed
      )
    } else {
      this.filteredTasks = this.tasks;
    }
  }

}
