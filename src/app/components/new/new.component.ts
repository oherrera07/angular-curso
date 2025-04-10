import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {Tasks} from '../../core/models/tasks'
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-new',
  imports: [ReactiveFormsModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.scss'
})
export class NewComponent {
  nextId=1;
  sendTask!: Tasks;
  tasksService = inject(TasksService)
  tasksForm = new FormGroup ({
    id: new FormControl(),
    details: new FormControl(),
    period: new FormControl(),
    events: new FormControl(),
    icon: new FormControl(),
    goal: new FormControl(),
    deadline: new FormControl(),
    completed: new FormControl(),
  })
  frequencies = ["day", "week", "month", "year"];
  icons = ["💻", "🏃‍♂️", "✈️", "📚", "🚴"];

  constructor(private router:Router){

  }

  uploadForm(){
    this.nextId++;
    this.sendTask = {
      "id": this.nextId.toString(),
      "details": this.tasksForm.value.details!,
      "period": this.tasksForm.value.period!,
      "events": this.tasksForm.value.events!,
      "icon": this.tasksForm.value.icon!,
      "goal": this.tasksForm.value.goal!,
      "deadline": this.tasksForm.value.deadline!,
      "completed": this.tasksForm.value.completed!
    }
    this.tasksService.updateTasks(this.sendTask);
    this.router.navigate(['/']);
  }
}
