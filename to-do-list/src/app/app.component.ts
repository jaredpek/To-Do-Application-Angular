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
  title = 'to-do-list';

  items: ToDoItem[] = [
    {
      id: "item1",
      name: "item1",
      created: new Date(),
      completed: false,
    },
    {
      id: "item2",
      name: "item2",
      created: new Date(),
      completed: false,
    },
    {
      id: "item3",
      name: "item3",
      created: new Date(),
      completed: false,
    }
  ];
}
