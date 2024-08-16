import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskForm } from './tasks/task-form/task-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskForm, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'todo-list';
}
