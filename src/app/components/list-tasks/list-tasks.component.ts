import { Component, inject } from '@angular/core';
import { TasksComponent } from '../../design/tasks/tasks.component';
import { TasksService } from '../../services/tasks.service';
import { Tasks } from '../../core/models/tasks';

@Component({
  selector: 'app-list-tasks',
  imports: [TasksComponent],
  templateUrl: './list-tasks.component.html',
  styleUrl: './list-tasks.component.scss'
})
export class ListTasksComponent {
  tasksService = inject(TasksService);
  tasksList!: Tasks [];
  constructor() {
    this.tasksList = this.tasksService.getTasks();
  }
}
