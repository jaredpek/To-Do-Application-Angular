import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoItem } from '../models/ToDoItem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToDoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todolistapp';

  items: ToDoItem[] = [
    new ToDoItem('item1'),
    new ToDoItem('item2'),
    new ToDoItem('item3'),
  ]
}
