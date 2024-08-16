import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

interface ITaskForm {
  title: string;
  due?: string;
}

interface ITask extends ITaskForm {
  id: number;
}

@Component({
  standalone: true,
  templateUrl: './task-form.component.html',
  selector: 'task-form',
  imports: [ReactiveFormsModule],
})
export class TaskForm {
  tasks: ITask[] = [];
  taskForm = new FormGroup({
    title: new FormControl(),
    due: new FormControl(),
  });

  handleSubmit() {
    this.tasks.push({
      id: this.tasks.length,
      title: this.taskForm.value.title,
      due: this.taskForm.value.due,
    });
    this.taskForm.reset();
  }
}
