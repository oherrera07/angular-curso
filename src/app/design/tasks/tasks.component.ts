import { Component, Input } from '@angular/core';
import { OnInit } from '../../../../node_modules/@angular/core/index';
import { Tasks } from '../../core/models/tasks'


@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit{
  @Input()
  task!:Tasks
  achieved!:number
  ngOnInit(): void {
      this.achieved=this.task.completed/this.task.goal*100;
  }

}
