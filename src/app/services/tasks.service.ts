import { Injectable } from '@angular/core';
import { Tasks } from '../core/models/tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasksMock: Tasks[] = [
    {
      "id": "1",
      "details": "run",
      "period": "day",
      "events": 1,
      "icon": "🏃‍♂️",
      "goal": 365,
      "deadline": "2030-01-01",
      "completed": 360
    },
    {
      "id": "2",
      "details": "read",
      "period": "year",
      "events": 6,
      "icon": "📚",
      "goal": 12,
      "deadline": "2030-01-01",
      "completed": 0
    },
    {
      "id": "3",
      "details": "travel",
      "period": "month",
      "events": 1,
      "icon": "✈️",
      "goal": 60,
      "deadline": "2030-01-01",
      "completed": 40
    }
  ]

  constructor() { }

  getTasks():Tasks[]{
    return this.tasksMock;
  }
}
