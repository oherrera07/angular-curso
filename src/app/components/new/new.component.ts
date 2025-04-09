import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new',
  imports: [ReactiveFormsModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.scss'
})
export class NewComponent {
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
}
